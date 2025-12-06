import Card from "@/components/ui/Card";
import { QueryStateHandler } from "@/components/ui/QueryStateHandler";
import { useFeatures } from "@/hooks/useFeatures";
import { UI_MESSAGES } from "@/constants/messages";

export const Features = () => {
    const { data: features = [], isLoading, error } = useFeatures();

    return (
      <section className="px-10 my-16 md:px-15 md:my-20 lg:px-20 lg:mb-26 xl:px-35">
          <div className="bg-[#000932] rounded-lg py-10 container mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
              <QueryStateHandler
                  isLoading={isLoading}
                  error={error}
                  isEmpty={features.length === 0}
                  loadingMessage={UI_MESSAGES.LOADING_FEATURES}
                  errorMessage={error instanceof Error ? error.message : UI_MESSAGES.ERROR_LOADING_FEATURES}
                  emptyMessage={UI_MESSAGES.NO_FEATURES}
                  loadingComponent={
                      <div className="container mx-auto text-center">
                          <p className="text-white">Carregando...</p>
                      </div>
                  }
                  errorComponent={
                      <div className="container mx-auto text-center">
                          <p className="text-destructive">
                              {error instanceof Error ? error.message : 'Erro ao carregar features'}
                          </p>
                      </div>
                  }
                  emptyComponent={
                      <div className="container mx-auto text-center">
                          <p className="text-white">Nenhuma feature disponível</p>
                      </div>
                  }
              >
                  <div className="max-w-4xl mx-auto text-center">
                      <h1 className="text-2xl sm:text-4x font-bold text-[white]">
                          CONHEÇA POSSÍVEIS APLICAÇÕES!
                      </h1>
                      <p className="text-sm mt-8 text-[white] lg:text-base">
                        Compacta e eficiente, a UAI.py é capaz de coletar, processar e transmitir informações em tempo real, adaptando-se a diferentes necessidades e contextos. É possível utilizá-la como base para diversas aplicações inteligentes e conectadas. Abaixo temos alguns exemplos de usabilidade:
                      </p>
                  </div>
                  
                  <div className="mt-12 max-w-7xl mx-auto">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                          {features.map((feature) => (
                              <Card key={feature.id}>
                                  <Card.Header>
                                      <Card.Header.Title title={feature.title} icon={feature.icon} />
                                  </Card.Header>
                                  <Card.Body>
                                      <p>{feature.description}</p>
                                  </Card.Body>
                              </Card>
                          ))}
                      </div>
                  </div>
              </QueryStateHandler>
          </div>
      </section>
    );
};

