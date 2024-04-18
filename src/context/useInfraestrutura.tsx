
import {createContext, useContext, useEffect, useState} from "react"
import { infraestruturaProps } from "./type";
import {api} from "../services/api";

type InfraestruturaInput = Omit<infraestruturaProps, "createAt" | "updatedAt">;

type InfraestruturaContextData = {
  infraestruturas: infraestruturaProps[];
  updateInfraestrutura: (data: any) => Promise<void>;
}

type InfraestruturasProviderProps = {
  children: React.ReactNode;
}

const InfraestruturasContext = createContext<InfraestruturaContextData>(
  {} as InfraestruturaContextData
);

export function InfraestruturaProvider({ children }: InfraestruturasProviderProps) {
  const [infraestruturas, setInfraestruturas] = useState<infraestruturaProps[]>([]);

  useEffect(() => {
    api
      .get("/infraestruturas")
      .then((response) => setInfraestruturas(response.data.infraestruturas));
  }, []);

  async function  updateInfraestrutura(data: any){
    try{
    const response = await api.put(`/infraestruturas/${data.id}`, {
      ...data,
      updatedAt: new Date(),
    });
    const { infraestrutura } = response.data;

    setInfraestruturas([...infraestruturas, infraestrutura]);
  }catch(error){
    console.error("Erro ao actualizar infraestrutura", error);
  }
  }



  return (
    <InfraestruturasContext.Provider value={{ infraestruturas, updateInfraestrutura }}>
      {children}
    </InfraestruturasContext.Provider>
  );
}

export function useInfraestruturas() {
  const context = useContext(InfraestruturasContext);
  return context;
}





