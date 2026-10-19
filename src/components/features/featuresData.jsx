import { Sparkles, Layers, Zap, Download } from "lucide-react";

import FeatureImage1 from "../../assets/images/feature-01.png";
import FeatureImage2 from "../../assets/images/feature-02.png";
import FeatureImage3 from "../../assets/images/feature-03.png";
import FeatureImage4 from "../../assets/images/feature-04.png";

export const features = [
  {
    title: "Hyper-Realistic Generation",
    description: "Neural engine capturing skin texture and lighting for indistinguishable results.",
    icon: <Sparkles className="w-5 h-5 text-blue-600" />,
    image: FeatureImage1,
    column: 1
  },
  {
    title: "Style Consistency",
    description: "Maintain facial features across different outfits and poses seamlessly.",
    icon: <Layers className="w-5 h-5 text-indigo-600" />,
    image: FeatureImage2,
    column: 2
  },
  {
    title: "Advanced Compression",
    description: "Reducing file sizes up to 80% while retaining 4K detail for faster loads.",
    icon: <Zap className="w-5 h-5 text-cyan-600" />,
    image: FeatureImage4,
    column: 2
  },
  {
    title: "Pro-Grade Studio Exports",
    description: "4K resolution with automatic background removal for instant deployment.",
    icon: <Download className="w-5 h-5 text-blue-600" />,
    image: FeatureImage3,
    column: 3
  },
];
