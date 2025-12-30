import React from 'react';
import {
  FaJava, FaNodeJs, FaPython, FaReact, FaVuejs, FaAws, FaDocker, FaLinux, FaGitAlt
} from 'react-icons/fa';
import {
  SiGo, SiSpringboot, SiDjango, SiFastapi, SiGraphql,
  SiNextdotjs, SiTypescript, SiTailwindcss, SiFlutter,
  SiKubernetes, SiGooglecloud, SiTerraform, SiArgo, SiPrometheus, SiGrafana,
  SiPostgresql, SiMongodb, SiRedis, SiElasticsearch, SiApachekafka, SiRabbitmq,
  SiOpenai, SiPytorch, SiTensorflow, SiHuggingface,
  SiNvidia, SiJavascript, SiRust, SiApachespark, SiSnowflake
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { VscAzure } from 'react-icons/vsc';

const icons = {
  // Backend
  'Java': FaJava,
  'Go': SiGo,
  'Python': FaPython,
  'Node.js': FaNodeJs,
  'Spring Boot': SiSpringboot,
  'Django': SiDjango,
  'FastAPI': SiFastapi,
  'gRPC': TbApi,
  'GraphQL': SiGraphql,
  'Rust': SiRust,

  // Frontend & Mobile
  'React': FaReact,
  'Next.js': SiNextdotjs,
  'TypeScript': SiTypescript,
  'Vue.js': FaVuejs,
  'Tailwind CSS': SiTailwindcss,
  'Flutter': SiFlutter,
  'React Native': FaReact,
  'JavaScript': SiJavascript,
  'Kotlin': FaJava,
  'Swift': FaGitAlt,

  // Cloud & DevOps
  'AWS': FaAws,
  'Docker': FaDocker,
  'Kubernetes': SiKubernetes,
  'Google Cloud': SiGooglecloud,
  'Terraform': SiTerraform,
  'ArgoCD': SiArgo,
  'Prometheus': SiPrometheus,
  'Grafana': SiGrafana,
  'CI/CD': FaGitAlt,

  // Data
  'PostgreSQL': SiPostgresql,
  'MongoDB': SiMongodb,
  'Redis': SiRedis,
  'Elasticsearch': SiElasticsearch,
  'Kafka': SiApachekafka,
  'RabbitMQ': SiRabbitmq,
  'ClickHouse': SiSnowflake,
  'Snowflake': SiSnowflake,
  'BigQuery': SiGooglecloud,

  // AI & ML
  'OpenAI': SiOpenai,
  'PyTorch': SiPytorch,
  'TensorFlow': SiTensorflow,
  'LangChain': SiNextdotjs,
  'Hugging Face': SiHuggingface,
  'CUDA': SiNvidia,
  'Computer Vision': FaReact,
  'NLP': FaReact,
};

export const TechIcon = ({ name, className }) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    // Fallback if specific icon missing, returns a generic code-like placeholder
    return (
      <svg 
        className={className} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        width={24}
        height={24}
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }

  return <IconComponent className={className} />;
};
