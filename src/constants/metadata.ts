export const defaultKeywords = [
  "CSIPRO",
  "CSI PRO",
  "Desarrollo",
  "Innovación",
  "Investigación",
  "Tecnología",
  "Laboratorio",
  "Universidad de Sonora",
  "UniSon",
  "Ingeniería en Sistemas de Información",
  "ISI",
  "Departmento de Ingeniería Industrial",
  "Software",
  "Hardware",
  "Ingeniería de Software",
  "Desarrollo de Software",
  "Proyectos Tecnológicos",
];

export const siteName = "CSI PRO";

export const generateMetaTitle = (title?: string) => {
  return title ? `${title} - ${siteName}` : siteName;
};

export const generateMetaDescription = (
  description = "Un espacio de desarrollo, innovación e investigación en la Universidad de Sonora",
) => {
  return description;
};
