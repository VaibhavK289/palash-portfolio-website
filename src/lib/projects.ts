import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "startup-profits",
    title: "Startup Profit Predictor",
    subtitle: "Financial forecasting using regression models",
    description:
      "Built and validated regression models on R&D and marketing costs to enhance financial forecasting accuracy and revenue optimization.",
    impact: "85% forecasting precision and 30% faster analysis pipeline",
    longDescription: [
      "This project focuses on providing data-driven insights for financial planning by analyzing multiple regression models.",
      "I implemented 5 different regression models to predict profits based on administrative and marketing expenditures, achieving over 85% precision in forecasting.",
      "By leveraging Python libraries like Scikit-Learn and Pandas, I optimized the data analysis pipeline, reducing processing time by 30% and improving model building efficiency.",
    ],
    year: "2024",
    role: "Data Scientist",
    stack: ["Python", "Scikit-Learn", "Pandas", "Regression"],
    category: "Machine Learning",
    accentColor: "#00E5FF",
    coverGradient: "linear-gradient(135deg, #07131a 0%, #0a2233 55%, #26140a 100%)",
    links: { github: "https://github.com/palashchaturvedi" },
    features: [
      {
        number: "01",
        title: "Regression Analysis",
        description:
          "Validated 5 distinct regression models to ensure the most accurate financial prediction for startup growth.",
      },
      {
        number: "02",
        title: "Revenue Optimization",
        description:
          "Analyzed the impact of R&D and marketing spend on bottom-line profits to guide strategic investment.",
      },
      {
        number: "03",
        title: "Data Pipeline",
        description:
          "Engineered an efficient preprocessing pipeline using Pandas and NumPy for cleaner, faster model training.",
      },
    ],
    nextSlug: "image-captioning",
  },
  {
    slug: "image-captioning",
    title: "AI Image Captioning",
    subtitle: "CNN + LSTM hybrid deep learning model",
    description:
      "Designed and trained a deep learning model combining CNNs and LSTMs to generate descriptive captions for images.",
    impact: "90% caption accuracy with 20% relevance improvement",
    longDescription: [
      "Image Captioning is a complex task requiring both computer vision (to understand the image) and natural language processing (to generate the text).",
      "I designed a hybrid architecture using a Convolutional Neural Network (CNN) for feature extraction and a Long Short-Term Memory (LSTM) network for sequence generation.",
      "Through careful tuning of model layers and embedding parameters, I improved caption relevance by 20% and achieved a final caption accuracy of 90% using TensorFlow and Keras.",
    ],
    year: "2024",
    role: "AI/ML Engineer",
    stack: ["TensorFlow", "Keras", "NLP", "CNN", "LSTM"],
    category: "Artificial Intelligence",
    accentColor: "#5EEAD4",
    coverGradient: "linear-gradient(135deg, #050f1a 0%, #173047 60%, #2b170a 100%)",
    links: { github: "https://github.com/palashchaturvedi" },
    features: [
      {
        number: "01",
        title: "Hybrid Architecture",
        description:
          "Combined CNNs for visual feature encoding and LSTMs for linguistic sequence generation.",
      },
      {
        number: "02",
        title: "NLP Integration",
        description:
          "Integrated word embeddings and language modeling to ensure captions were grammatically correct and descriptive.",
      },
      {
        number: "03",
        title: "Hyperparameter Tuning",
        description:
          "Optimized embedding dimensions and layer depths to increase caption relevance and accuracy.",
      },
    ],
    nextSlug: "startup-profits",
  },
];

export const workFilters = [
  "All",
  "Data Analytics",
  "Machine Learning",
  "Artificial Intelligence",
  "Software Engineering",
] as const;

export const skills = [
  { name: "Python", group: "Language" },
  { name: "C++", group: "Language" },
  { name: "Java", group: "Language" },
  { name: "SQL", group: "Language" },
  { name: "Power BI", group: "Tool" },
  { name: "Excel", group: "Tool" },
  { name: "Git", group: "Tool" },
  { name: "NumPy", group: "Library" },
  { name: "Pandas", group: "Library" },
  { name: "Matplotlib", group: "Library" },
  { name: "TensorFlow", group: "Library" },
  { name: "Scikit-Learn", group: "Library" },
  { name: "Keras", group: "Library" },
];

export const stats = [
  { label: "CGPA", value: 8, suffix: ".52" },
  { label: "AI Accuracy", value: 90, suffix: "%" },
  { label: "Reporting Efficiency", value: 30, suffix: "%" },
  { label: "Forecasting Precision", value: 85, suffix: "%" },
];
