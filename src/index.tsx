import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createServer, Model} from "miragejs";

createServer({
  models: {
    infraestrutura: Model,
  },

  seeds(server){
    server.db.loadData({
      infraestruturas:[
     { 
      id: 0,
      designacao: "Salas de Aula Teóricas",
      salas_funcionais: 0,
      salas_nao_funcionais: 0,
      createdAt: new Date("2024-04-17 09:00:00"),
      updatedAt: new Date("2024-04-17 09:00:00"),
    },
    {
      id: 1,
      designacao: "Salas de Informática",
      salas_funcionais: 1,
      salas_nao_funcionais: 2,
      createdAt: new Date("2024-04-17 09:00:00"),
      updatedAt: new Date("2024-04-17 09:00:00"),
    },
    {
      id: 2,
      designacao: "Laboratórios de Automação",
      salas_funcionais: 4,
      salas_nao_funcionais: 6,
      createdAt: new Date("2024-04-17 09:00:00"),
      updatedAt: new Date("2024-04-17 09:00:00"),
    },
    {
      id: 3,
      designacao: "Laboratórios de Biologia",
      salas_funcionais: 2,
      salas_nao_funcionais: 3,
      createdAt: new Date("2024-04-17 09:00:00"),
      updatedAt: new Date("2024-04-17 09:00:00"),
    },
    {
      id: 4,
      designacao: "Laboratórios de CAD",
      salas_funcionais: 5,
      salas_nao_funcionais: 1,
      createdAt: new Date("2024-04-17 09:00:00"),
      updatedAt: new Date("2024-04-17 09:00:00"),
    },
    {
      id: 5,
      designacao: "Laboratórios de CNC",
      salas_funcionais: 2,
      salas_nao_funcionais: 8,
      createdAt: new Date("2024-04-17 09:00:00"),
      updatedAt: new Date("2024-04-17 09:00:00"),
    },
    {
      id: 6,
      designacao: "Laboratórios de Electrónica",
      salas_funcionais: 3,
      salas_nao_funcionais: 3,
      createdAt: new Date("2024-04-17 09:00:00"),
      updatedAt: new Date("2024-04-17 09:00:00"),
    },
    {
      id: 7,
      designacao: "Laboratórios de Energias Renováveis",
      salas_funcionais: 5,
      salas_nao_funcionais: 1,
      createdAt: new Date("2024-04-17 09:00:00"),
      updatedAt: new Date("2024-04-17 09:00:00"),
    },
    {
      id: 8,
      designacao: "Laboratórios de Física",
      salas_funcionais: 1,
      salas_nao_funcionais: 1,
      createdAt: new Date("2024-04-17 09:00:00"),
      updatedAt: new Date("2024-04-17 09:00:00"),
    },
    {
      id: 9,
      designacao: "Laboratórios de Frio e Climatização",
      salas_funcionais: 5,
      salas_nao_funcionais: 3,
      createdAt: new Date("2024-04-17 09:00:00"),
      updatedAt: new Date("2024-04-17 09:00:00"),
    },
    {
      id: 10,
      designacao: "Laboratórios de Instalações Elétricas",
      salas_funcionais: 2,
      salas_nao_funcionais: 2,
      createdAt: new Date("2024-04-17 09:00:00"),
      updatedAt: new Date("2024-04-17 09:00:00"),
    },
    {
      id: 11,
      designacao: "Laboratórios de Máquinas Elétricas",
      salas_funcionais: 4,
      salas_nao_funcionais: 4,
      createdAt: new Date("2024-04-17 09:00:00"),
      updatedAt: new Date("2024-04-17 09:00:00"),
    },
    {
      id: 12,
      designacao: "Laboratórios de Metalomecânica",
      salas_funcionais: 9,
      salas_nao_funcionais: 2,
      createdAt: new Date("2024-04-17 09:00:00"),
      updatedAt: new Date("2024-04-17 09:00:00"),
    },
    {
      id: 13,
      designacao: "Laboratórios de Química",
      salas_funcionais: 3,
      salas_nao_funcionais: 3,
      createdAt: new Date("2024-04-17 09:00:00"),
      updatedAt: new Date("2024-04-17 09:00:00"),
    },
    {
      id: 14,
      designacao: "Laboratórios de Telecomunicações",
      salas_funcionais: 7,
      salas_nao_funcionais: 1,
      createdAt: new Date("2024-04-17 09:00:00"),
      updatedAt: new Date("2024-04-17 09:00:00"),
    },
    {
      id: 15,
      designacao: "Oficinas de Construções Mecânicas",
      salas_funcionais: 3,
      salas_nao_funcionais: 3,
      createdAt: new Date("2024-04-17 09:00:00"),
      updatedAt: new Date("2024-04-17 09:00:00"),
    },
    {
      id: 16,
      designacao: "Oficionas de Máquinas e Motores",
      salas_funcionais: 8,
      salas_nao_funcionais: 8,
      createdAt: new Date("2024-04-17 09:00:00"),
      updatedAt: new Date("2024-04-17 09:00:00"),
    },
    {
      id: 17,
      designacao: "Oficionas de Soldura",
      salas_funcionais: 2,
      salas_nao_funcionais: 3,
      createdAt: new Date("2024-04-17 09:00:00"),
      updatedAt: new Date("2024-04-17 09:00:00"),
    }
    ]
    })
  },

  routes() {

      this.namespace = "api";

      this.get("/infraestruturas", () => {
        return this.schema.all("infraestrutura")
      })

      this.put("/infraestruturas/:id", (schema, request) => {
        const id = request.params.id;
        const data = JSON.parse(request.requestBody);

        schema.db.infraestruturas.update(id, data);

        return schema.db.infraestruturas.find(id);
      })
  },

 })

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

