import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../../public/corpcomment.png";
import rmtdevImg from "../../public/rmtdev.png";
import wordanalyticsImg from "../../public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#sobre",
  },
  {
    name: "Projetos",
    hash: "#projetos",
  },
  {
    name: "Habilidades",
    hash: "#habilidades",
  },
  {
    name: "Experiencia",
    hash: "#experiencia",
  },
  {
    name: "Contato",
    hash: "#contato",
  },
] as const;

export const experienciaData = [
  {
    title: "SIGSTECH Soluções em Tecnologia",
    location: "São Paulo, SP",
    description:
      "Trabalho atualmente como analista de suporte na SIGSTECH, onde faz parte do Grupo Sifra.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - ",
  },
  {
    title: "RP Network ME",
    location: "São Paulo, SP",
    description:
      "Atuei como auxiliar de serviços gerais de TI como freelancer.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2024",
  },
  {
    title: "FIAP",
    location: "São Paulo, SP",
    description:
      "Estou cursando Análise e Desenvolvimento de Sistemas na FIAP.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - ",
  },
] as const;

export const projetosData = [
  {
    title: "MotoFlow",
    description:
      "Aplicativo mobile inteligente para gestão de pátios de motocicletas, desenvolvido com React Native + Expo.",
    tags: ["React", "Expo GO", "CSS", "TypeScript" ],
    imageUrl: corpcommentImg,
  },
  {
    title: "Prevent+",
    description:
      "Prevent+ é uma plataforma educativa para prevenção de desastres. O aplicativo oferece alertas, dicas de segurança, previsão do tempo, kit de emergência e locais seguros para informar e proteger a comunidade.",
    tags: ["React", "TypeScript", "CSS", "Expo GO"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Eficientiza",
    description:
      "Eficientiza é um blog dedicado a promover práticas sustentáveis e a adoção de energia limpa, com foco no setor da construção civil.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Python",
  "Java",
  "C#",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Python",
  "Framer Motion",
] as const;