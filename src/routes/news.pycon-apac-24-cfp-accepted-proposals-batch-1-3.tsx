import { Layout } from "~/components/shared/Layout";
import Markdown from "react-markdown";
import "~/components/routes/news/styles/newsdetails.css";

const news = `
Dear Python Enthusiasts,


We are thrilled to announce the lineup of accepted talks for PyCon APAC 2024! We received a number of high-quality submissions 
from speakers around the globe, showcasing the incredible diversity and ideas within our community. Our selection committee faced 
the challenging task of choosing from many excellent proposals, and we are excited to present to you the most current list of talks, workshops, 
and posters that will be featured in this year's PyCon APAC 2024.


**Talks**
1. Empowering the Python Community: PSF Involvement and Introducing Python Asia Organization (PAO) by Iqbal Abdullah and Bae KwonHan
1. Multi-Modal Data Fusion in Heterogeneous Data for Artificial Intelligence: A New Perspective on Data Processing (An Agri Data Case Study) by Nur Arifin Akbar
1. Building Agentic Workflows for Planning and Reasoning with LLMs by Tarun Jain
1. Python and the Sun: Transforming Space Science with Open-Source by Akshit Tyagi
1. The Quest for Hidden Knowledge: Journey to the Land of Lost Files by Raka Ardhi Prakoso
1. Validating and monitoring the performance of your ML Applications (v2) by Niño R. Eclarin
1. MalPython: Can You Trust Your Python? by Satria Ady Pradana
1. Python and Volcanoes by Martanto
1. Pytest can do a lot more than you'd think by Tushar Sadhwani
1. Pythonic Ways to Build Serverless Apps in AWS and how to migrate from Frameworks by Arnel Jan Sarmiento
1. Don't break your library users by Dima Tisnek
1. Alternative A/B Testing: Using Causal Inference to Measure Impact of Your Experiment by Aris Budi Wibowo
1. Python in the browser: my journey towards enhancing the Scientific Python ecosystem's interoperability with Pyodide by Agriya Khetarpal
1. Running Python on NPU by Eka Kurniawan
1. Optimizing and scaling Generative AI applications and systems by Joshua Arvin Lat and Sophia Soliven
1. How to safely migrate from pandas to Polars by Cheuk Ting Ho
1. Python at Scale: Building a Node Autoscaling Engine with a Distributed System by Yuga and Restu Haqqi Muzakir
1. Improve System Maintenance & Troubleshooting Efficiency & Effectiveness by Leveraging IoT Technology by Muhammad Verly
1. Build Streaming Processing Pipeline with Apache Beam by Bimantara Hanumpraja
1. Fine-Tuning Large Language Models with Declarative ML Orchestration by Gaurav Pandey and Shivay Lamba
1. Supercharge Your Python Web App Security Using Logto.io as Your Authentication Service by Rizqon Sadida
1. Plug & Play with Your Data Using PyAirbyte by Pangeran Bottor
1. GraphQL in Python by Marcin Gebala
1. Multimodal Retrieval Augmented Generation in Action by Esther Irawati Setiawan
1. Profile, debug and monitor my PySpark workloads by Hyukjin Kwon
1. Enlightened with Python: Is It Making a Difference or Making Things Worse? (Empowering Citizens with Python for Better Public Policy) by Yudhapratama Nugraha Aryaputra
1. Developing Python Libraries Using Rust by Shota Kokado
1. Implementing GraphDB for LLM Knowledge Bases by Afif A. Iskandar
1. Python Powered Open Science Hardware: Journey of ExpEYES from Classrooms to Research Labs. by Praveen Patil
1. Robyn: An async Python web framework with a Rust runtime by Gaurav Pandey and Shivay Lamba
1. Model Compression for Large Language Models using Python by Zaki Indra Sukma
1. Build my own Pytest plugin for automated visual testing by Aria Suseno
1. How to learn Japanese with Python by Takanori Suzuki
1. Safeguard Critical Changes With Python : Kafka ACLs by Theodore Gautama Chandra
1. “Serverless AI Inferencing Using Python and WebAssembly” by Gaurav Pandey and Shivay Lamba
1. Structlog in Practice by Takayuki Shimizukawa
1. Organized Chaos: Demystifying Python’s Garbage Collection by Sidhant Gupta and Sejal Gupta
1. Use Cases of Python Async in Production - Focusing on Trio/Trio-Util by Junya Fukuda
1. Crimes with the Python syntax by Tushar Sadhwani
1. Encrypted computing in Python using OpenFHE by Sukanya Mandal
1. Enhancing Actively Attacked WordPress Vulnerability Detection with Python, WP-CLI Vulnerability Scanner, and Imunify360 Incident Logs by Nizar Akbar Meilani
1. Python Code Quality Assurance by Iskandar Setiadi
1. Extracting Structured Data from LLMs with LangChain and Pydantic by Kalyan Prasad
1. The power of Python's type hints: Case studies focusing on famous libraries by Rei Suyama
1. Speeding Up Transcribing with GPUs and TPUs by Yuta Yanagi
1. Seeing Faces Behind the Darkness: How Several Low-Light Image Feature Extraction Algorithms Work by Silvia Larasatul M
1. Optimizing Web Presence: Building an SEO Analyzer with Flask & NLP-ID by Alysia Alfi
1. Optimizing Python Performance: Strategies for Infrastructure Automation and Beyond by Irwan Shofwan
1. Empowering your real life with Raspberry Pi: Creating a voice-activated schedule bot by Shintaro Matsudo
1. Mastering Investment Risk Analysis with Multi-Agent AI Systems by Kalyan Prasad
1. Practical GraphQL Server Development with FastAPI and Strawberry by Takayuki Kawazoe
1. Python Django and HTMX a match made in heaven: Turn your django website into an SPA without javascript by uba Joseph
1. Empower Your Business with Modern Data Architecture: Enabling BI, ML, and Data Intelligent Services by Danny Chan
1. Empowering Data Analytics with Python: Real-World Applications and Insights by Fajar Muslim
1. Building graph-based RAG application for accurate, complete, and explainable AI by Muhammad Arif Wicaksana
1. Building Image Embeddings from Scratch- A Hands-on Approach with Contrastive Loss by Kalyan Prasad
1. Empowering Real-World Applications with Graph Neural Networks in Python by Fehru Mandala Putra
1. Classifying Transaction Purpose with Graph Neural Networks by Rimba Erlangga
1. FastAPI Deconstructed: Anatomy of a Modern ASGI Framework by Rafiqul Hasan
1. Sky Full of Stars by citra sagala
1. Building Scalable AI Solutions Using Workflow Orchestration by Fehru Mandala Putra
1. Identification Lampung Scripts Using Optical Character Recognition in Python by Fendy Hendriyanto
1. Server Side Template Injections? Keep Away! by Khalil Lemtaffah


**Short Talks**
1. Leveraging Python to create Accurate AI Automated News Generation Content. (without a need to understand LLM deeply) by Rexsy Bima Trima Wahyu
1. Playing Around with Locust Load Testing Tools by Burhanuddin Ahmad
1. Toward Extracting Care Records from Transcriptions of Visiting Nurses Using LangChain by Defry Hamdhana
1. Buy / short a dystopyc future - LLM agents and vector databases for portfolio management by Carlos Vecina
1. Text Analytics with Python on Medium Articles by Nur Azmi Prasetyo
1. Data Slices: A Data Visualization Series to Explore Hidden Beauty and Insights using Python by Mario Caesar
1. Djangonaut Space: A Fun Way to Be Familiar with Open Source by Shafiya Adzhani
1. Building Responsible Generative AI in Python's Ecosystem by Ahmad Mustafid
1. Writing Python code like Typescript by Muhammad Bima Adi Prabowo
1. Make use of your Python skill as an Office Worker by Dima M Dinama
1. Building a Predictive System for Agricultural Commodity Prices by Arsy Opraza Akma
1. Database replication with Django and Postgres by Marcin Gebala


**Workshops**
1. Building Python Tools for Probing the Digital Footprint by Nadhiar Ridho Wahyu Pradana
1. Web Scraping Made Easy with Scrapy by Sigit Dewanto
1. Building RAG pipeline using Open Source LLMs by Tarun Jain
1. Deploy your Machine Learning model with Fast API by Cheuk Ting Ho
1. Building AI Agent Bot with RAG by  Langchain and Reasoning Engine by Imre Nagi
1. The robots are coming by Colin Bell
1. Building IoT and Camera Projects with XIAO ESP32S3 and MicroPython by Hendra Kusumah
1. Writing Python modules in Rust - PyO3 101 by Cheuk Ting Ho


**Posters**
1. Vision - Python Based Alzheimer's Detection Assistant by Niharika Vadluri
1. Data Wizards Community: Indonesian Community for Data Enthusiasts by Nur Azmi Prasetyo
1. Classifying Transaction Purpose with Graph Neural Networks by Rimba Erlangga
1. Smart Rehab: Enhancing Cognitive Skills in Children with Python by Radhika Shidling Bhangi and Aditi Raviraj Burse
`;

export default function NewsDetailPage() {
	return (
		<Layout isLogin={false}>
			<div className="pt-10 pb-10 px-4 sm:px-20 news">
				<div className="flex gap-2">
					<span className="font-bold text-[12px] text-[#333333]">
						20-8-2024
					</span>
					<span className="font-bold text-[12px] text-[#333333]">|</span>
					<span className="font-bold text-[12px] text-[#333333]">Tech</span>
					<span className="font-bold text-[12px] text-[#333333]">|</span>
					<span className="font-bold text-[12px] text-[#333333]">Python</span>
				</div>
				<h1 className="font-semibold text-[44px] leading-[55px] py-5">
					PyCon APAC 24 - CfP Accepted Proposals Batch 1 -3
				</h1>
				<div className="h-[500px] bg-[#333333] rounded-lg py-20"></div>
				<Markdown>{news}</Markdown>
			</div>
		</Layout>
	);
}
