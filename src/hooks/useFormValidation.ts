import { useState, useCallback } from 'react';
import * as z from 'zod';

/**
 * Hook genérico para validação de formulários usando Zod
 */
export function useFormValidation<T extends z.ZodTypeAny>(
  schema: T,
  initialValues: z.infer<T>
) {
  const [formValues, setFormValues] = useState<z.infer<T>>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormValues(prev => {
        const newValues = { ...(prev as Record<string, unknown>) };
        newValues[name] = value;
        return newValues as z.infer<T>;
      });
      
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    },
    [errors]
  );

  const validateForm = useCallback((): boolean => {
    try {
      schema.parse(formValues);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.issues.forEach((err: z.core.$ZodIssue) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  }, [schema, formValues]);

  const resetForm = useCallback(() => {
    setFormValues({ ...(initialValues as Record<string, unknown>) } as z.infer<T>);
    setErrors({});
  }, [initialValues]);

  return {
    formValues,
    setFormValues,
    errors,
    handleInputChange,
    validateForm,
    resetForm,
  };
}

