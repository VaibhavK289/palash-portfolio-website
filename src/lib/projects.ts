import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "startup-profits",
    title: "Predicting Profits for Different Startups",
    subtitle: "Python, Regression, Business Forecasting",
    description:
      "Developed a startup profitability prediction pipeline using multi-model regression on R&D, marketing, and administrative spend.",
    impact: "85% forecasting precision and 30% faster analysis cycles",
    longDescription: [
      "Early-stage financial planning was relying on static spreadsheet assumptions, making it difficult to forecast profit outcomes under different spend strategies. The project started by framing the problem as supervised regression with startup cost drivers as core features.",
      "Built a full modeling workflow in Python using Pandas and Scikit-Learn: cleaned raw records, standardized numeric features, split train/test sets, and benchmarked five regression approaches with consistent evaluation criteria.",
      "The final model stack delivered more than 85% precision and reduced analysis turnaround by 30%, enabling faster what-if planning and clearer, data-backed revenue strategy discussions.",
    ],
    year: "2024",
    role: "Data Analyst / ML Practitioner",
    stack: ["Python", "Pandas", "Scikit-Learn", "NumPy", "Matplotlib", "Regression Models"],
    category: "Machine Learning",
    accentColor: "#00E5FF",
    coverGradient: "linear-gradient(135deg, #07131a 0%, #0a2233 55%, #26140a 100%)",
    links: { github: "https://github.com/palashchaturvedi/Predicting-Profits-for-different-startups.git" },
    features: [
      {
        number: "01",
        title: "Multi-Model Benchmarking",
        description:
          "Benchmarked five regression algorithms with the same training and evaluation setup to identify the most reliable forecasting behavior.",
      },
      {
        number: "02",
        title: "Faster Analysis Workflow",
        description:
          "Reduced model iteration time by 30% through repeatable preprocessing, cleaner feature preparation, and simplified training scripts.",
      },
      {
        number: "03",
        title: "Business Decision Support",
        description:
          "Translated model outputs into actionable financial planning scenarios to support pricing, spending, and growth strategy decisions.",
      },
    ],
    nextSlug: "image-captioning",
  },
  {
    slug: "image-captioning",
    title: "Image Captioning Using AI",
    subtitle: "CNN-LSTM, NLP, Deep Learning",
    description:
      "Built an end-to-end image captioning system by combining CNN-based visual encoding with LSTM-based sequence generation.",
    impact: "90% caption accuracy and 20% gain in caption relevance",
    longDescription: [
      "The challenge was to convert visual content into coherent natural language descriptions, not just object labels. The project was scoped as an image-to-sequence task requiring both strong feature extraction and contextual language generation.",
      "Implemented a hybrid pipeline where CNN layers encoded image features and LSTM layers generated token sequences. Trained the model with TensorFlow and Keras, including preprocessing, tokenization, and embedding-based language modeling.",
      "Model tuning improved caption quality and contextual alignment by 20%, while final evaluation reached 90% caption accuracy, producing more human-like and informative outputs across test images.",
    ],
    year: "2024",
    role: "AI / ML Engineer",
    stack: ["Python", "TensorFlow", "Keras", "CNN", "LSTM", "NLP"],
    category: "Artificial Intelligence",
    accentColor: "#5EEAD4",
    coverGradient: "linear-gradient(135deg, #050f1a 0%, #173047 60%, #2b170a 100%)",
    links: { github: "https://github.com/palashchaturvedi" },
    features: [
      {
        number: "01",
        title: "Vision-Language Architecture",
        description:
          "Combined CNN feature extraction with LSTM decoding to map visual signals into sentence-level captions.",
      },
      {
        number: "02",
        title: "Caption Generation Pipeline",
        description:
          "Added tokenization, embeddings, and sequence modeling to generate captions that are grammatically coherent and context-aware.",
      },
      {
        number: "03",
        title: "Model Tuning and Evaluation",
        description:
          "Tuned embedding size, recurrent depth, and training parameters to improve relevance by 20% and reach 90% accuracy.",
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
