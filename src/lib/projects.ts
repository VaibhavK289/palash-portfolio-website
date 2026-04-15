import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "startup-profits",
    title: "Predicting Profits for Different Startups",
    subtitle: "Python, Regression Models",
    description:
      "Built and validated five regression models on R&D, marketing, and administrative costs to strengthen forecasting accuracy and revenue strategy.",
    impact: "85% precision in forecasting with 30% faster analysis workflows",
    longDescription: [
      "Built and validated five regression models using R&D, marketing, and administrative cost signals to improve startup profit prediction.",
      "Optimized data analysis workflows by 30% using Python, Scikit-Learn, and Pandas for faster model development and cleaner experimentation.",
      "Delivered data-driven financial planning insights with more than 85% precision, improving business intelligence and revenue optimization decisions.",
    ],
    year: "2024",
    role: "Data Analyst / ML Practitioner",
    stack: ["Python", "Regression Models", "Scikit-Learn", "Pandas", "Business Intelligence"],
    category: "Machine Learning",
    accentColor: "#00E5FF",
    coverGradient: "linear-gradient(135deg, #07131a 0%, #0a2233 55%, #26140a 100%)",
    links: { github: "https://github.com/palashchaturvedi/Predicting-Profits-for-different-startups.git" },
    features: [
      {
        number: "01",
        title: "Multi-Model Validation",
        description:
          "Compared and validated five regression approaches to identify the most reliable startup profit predictor.",
      },
      {
        number: "02",
        title: "Pipeline Optimization",
        description:
          "Reduced analysis time by 30% through optimized preprocessing and model training with Scikit-Learn and Pandas.",
      },
      {
        number: "03",
        title: "Financial Intelligence",
        description:
          "Produced actionable financial planning insights with over 85% precision for business strategy decisions.",
      },
    ],
    nextSlug: "image-captioning",
  },
  {
    slug: "image-captioning",
    title: "Image Captioning using AI",
    subtitle: "Neural Networks, NLP, AI & ML",
    description:
      "Designed and trained a hybrid deep learning model with CNN and LSTM to generate relevant image captions.",
    impact: "90% caption accuracy with 20% improvement in caption relevance",
    longDescription: [
      "Designed and trained a hybrid architecture where CNN layers capture visual features and LSTM layers generate contextual caption sequences.",
      "Integrated natural language processing components and achieved 90% caption accuracy using TensorFlow and Keras.",
      "Improved caption relevance by 20% through tuning neural layers, embeddings, and sequence generation behavior.",
    ],
    year: "2024",
    role: "AI / ML Engineer",
    stack: ["TensorFlow", "Keras", "CNN", "LSTM", "NLP", "Deep Learning"],
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
