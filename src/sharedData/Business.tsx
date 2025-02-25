import {
  FaBriefcase,
  FaChartLine,
  FaSearch,
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaTools,
  FaBullhorn,
  FaCloud,
} from "react-icons/fa";

const business = [
  {
    id: 1,
    title: "Best Business Solution",
    details:
      "Our goal is to make it possible for you to achieve success effortlessly.",
    icon: <FaBriefcase className="text-blue-500 text-4xl" />,
  },
  {
    id: 2,
    title: "Business Growth Planning",
    details:
      "We provide data-driven strategies to scale and grow your business.",
    icon: <FaChartLine className="text-green-500 text-4xl" />,
  },
  {
    id: 3,
    title: "Search Optimization",
    details:
      "Enhance your visibility with our SEO expertise for better ranking.",
    icon: <FaSearch className="text-orange-500 text-4xl" />,
  },
  {
    id: 4,
    title: "Web Development",
    details:
      "We build responsive and high-performance websites tailored to your needs.",
    icon: <FaCode className="text-purple-500 text-4xl" />,
  },
  {
    id: 5,
    title: "Android Development",
    details: "Custom Android applications to enhance your mobile presence.",
    icon: <FaMobileAlt className="text-yellow-500 text-4xl" />,
  },
  {
    id: 6,
    title: "UI/UX Design",
    details: "User-centric designs to enhance your digital experience.",
    icon: <FaPaintBrush className="text-pink-500 text-4xl" />,
  },
  {
    id: 7,
    title: "Website Maintenance",
    details: "Reliable support and maintenance services for your website.",
    icon: <FaTools className="text-red-500 text-4xl" />,
  },
  {
    id: 8,
    title: "Digital Marketing",
    details: "Grow your brand with our expert digital marketing strategies.",
    icon: <FaBullhorn className="text-teal-500 text-4xl" />,
  },
  {
    id: 9,
    title: "Cloud Solutions & Hosting",
    details:
      "Secure, scalable, and reliable cloud hosting services to keep your business online 24/7.",
    icon: <FaCloud className="text-blue-500 text-3xl" />,
  },
];

export default business;
