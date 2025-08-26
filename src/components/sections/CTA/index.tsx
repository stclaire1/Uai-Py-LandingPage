import { Button } from '@/components/ui/button'
import { useState } from "react"
import * as z from "zod"

export const CTA = () => {
  const formSchema = z.object({
    name: z.string().min(1, { message: "Nome é obrigatório" }),
    message: z.string().min(1, { message: "Mensagem é obrigatória" }),
  })

  type FormData = z.infer<typeof formSchema>

  const [formValues, setFormValues] = useState<FormData>({
    name: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormValues(prev => ({ ...prev, [name]: value }))
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    try {
      formSchema.parse(formValues)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.issues.forEach((err: z.core.$ZodIssue) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message
          }
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const sendToWhatsApp = () => {
    const phoneNumber = "553498619953"
    
    const message = `*Solicitação de Contato UAI.py*

 *Nome:* ${formValues.name}

*Mensagem:*
${formValues.message}

---
_Enviado através do site da UAI.py_`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      
      sendToWhatsApp()
      
      setFormValues({
        name: "",
        message: "",
      })
      
      setIsSuccess(true)
      setTimeout(() => setIsSuccess(false), 5000)
      
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-background" id="contato">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-muted rounded-2xl shadow-xl p-12">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Entre em contato conosco
          </h2>

          {isSuccess && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              <p className="font-semibold">Redirecionamento para WhatsApp concluído!</p>
              <p>Continue a conversa no WhatsApp para saber mais</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-text font-bold mb-3">
                Nome Completo
              </label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                placeholder="João Silva"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-primary/30 focus:ring-primary'
                } bg-background placeholder-input font-bold focus:outline-none focus:ring-2`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 font-medium">
                  {errors.name}
                </p>
              )}
            </div>


            <div>
              <label className="block text-text font-bold mb-3">
                Mensagem
              </label>
              <textarea
                name="message"
                value={formValues.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Descreva brevemente o que deseja para o seu veículo"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-primary/30 focus:ring-primary'
                } bg-background placeholder-input font-bold focus:outline-none focus:ring-2 resize-none`}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-600 font-medium">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="flex justify-center pt-4">
               <Button variant='plain' size="md" className="cursor-pointer lg:px-10" disabled={isSubmitting}>
                {isSubmitting ? "Redirecionando..." : "Enviar via WhatsApp"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}