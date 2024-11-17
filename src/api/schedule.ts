import { z } from "zod";

const scheduleSchema = z.object({
	status: z.literal(200),
	data: z.object({
		data: z.array(
			z.object({
				name: z.string().nullable(),
				date: z.string().nullable(),
				schedules: z.array(
					z.object({
						id: z.string(),
						name: z.string().nullable(),
						room: z.string().nullable(),
						language: z.string().nullable(),
						audience_level: z.string().nullable(),
						speakers: z.array(
							z.object({
								name: z.string().nullable(),
								job_title: z.string().nullable(),
								organisation: z.string().nullable(),
								bio: z.string().nullable(),
							}),
						),
						tags: z.array(z.any()),
						start: z.string().nullable(),
						end: z.string().nullable(),
						description: z.string().nullable(),
						streaming_link: z.string().nullable(),
						pretalk_link: z.string().nullable(),
					}),
				),
			}),
		),
	}),
});

export const getAllSchedule = async () => {
	const data = {
		status: 200,
		data: {
			data: [
				{
					name: "Day 3",
					date: "2024-10-27",
					schedules: [
						{
							id: "fe948ae7-b68e-44f4-a767-80c306a35683",
							name: "Opening Session #2",
							room: "Main Hall",
							language: "Indonesian",
							audience_level: null,
							speakers: [
								{
									name: "PyCon Organizer",
									job_title: null,
									organisation: null,
									bio: "-",
								},
							],
							tags: [],
							start: "09:00:00",
							end: "09:30:00",
							description: "Opening Session",
							streaming_link:
								"https://streamyard.com/watch/UUjmRDpGFByy?embed=true",
							pretalk_link: "-",
						},
						{
							id: "eb2eda1d-c108-4417-9f90-f4c22cba8f91",
							name: "Python Community and You",
							room: "Main Hall",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Mariatta Wijaya",
									job_title: "Lead Software Engineer",
									organisation: "CMD Limes",
									bio: "-",
								},
							],
							tags: [],
							start: "09:30:00",
							end: "10:30:00",
							description: "-",
							streaming_link:
								"https://streamyard.com/watch/ag5fYPVcnxCy?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/8F3YRL/",
						},
						{
							id: "30b80010-f3d1-4d60-ba99-af7e77dfdf41",
							name: "Extracting Structured Data from LLMs with LangChain and Pydantic",
							room: "Class #5 - 3B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Kalyan Prasad",
									job_title: null,
									organisation: null,
									bio: "Hello, this is Kalyan from India. I started my career as a newspaper delivery boy, and through hard work and determination, I evolved into a self-taught data scientist and analytics manager. And, I use to lead a talented data science and analytics team in my previous company. Currently I am a freelance Data & AI scientist!\nI'm deeply passionate about open-source communities and actively contribute to them. Over time, I've established myself as a respected global speaker and influential community leader, delivering talks at prestigious conferences and educational institutions such as PyData Global, Data Science Global Summit 2022, JupyterCon, PyCon JP, PyCon India, Devfest Hyderabad, PyCon APAC, PyCon Hong Kong, PyCon ZA, Pyjamas, Conf42, Developer Conference Telangana 2021, BelPy & KLS Gogte Institute of Technology, Belagavi, Karnataka, India. \nI also worked as Reviewer and Mentor for reputed conferences & hackathons including EuroPython, SciPy, PyData, PyData Seattle, JupyterCon, PyCon US, PyCon India, PyConfHyderabad, and many others. (At the moment, assisting the EuroPython 2024 Proposal Mentorship program.\nKalyan is also contributing to various open-source communities. He enjoys being involved with these communities and helping them grow. Currently I am associated with the following organizations below:\nNUMFOCUS - Small Development Grants Review Committee\nPyCon India – Conference Co-chair\nPyConf Hyderabad – Conference Co-chair\nKaggle X Bipoc Mentorship - Mentor\nPyData Global Impact Mentoring Program - Mentor\nHyderabad Python Users Group – Core Member/ Meetups Organizer\nHumans for AI – Program Manager for AI learning Community",
								},
							],
							tags: [],
							start: "10:30:00",
							end: "11:00:00",
							description:
								"This talk dives into the exciting realm of enriching your Large Language Model (LLM) interactions with structured data extraction. We'll explore how LangChain, in conjunction with Pydantic, empowers you to retrieve not just plain text from LLMs but also reusable Python objects like lists, dictionaries, and even pandas DataFrames.",
							streaming_link:
								"https://streamyard.com/watch/fT72Uzu6Pt52?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/UNRGGQ/",
						},
						{
							id: "dcaa99cf-a9d3-44b8-a75a-58eae41897ba",
							name: "Data Slices: A Data Visualization Series to Explore Hidden Beauty and Insights using Python",
							room: "Class #2 - 4B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Mario Caesar",
									job_title: "Data Engineer",
									organisation: "Digital Bank",
									bio: "I am a passionate and results-driven Data Engineer & Analytics that currently serving at PT Krom Bank Indonesia Tbk (Kredivo Group). With over three years of professional experience, I specialize in developing robust data pipelines, optimizing ETL processes, and ensuring data compliance and security. My technical proficiency includes Python, SQL, Google Cloud Platform, and Apache Airflow, among other tools and technologies.\n\nIn addition to my professional role, I am dedicated to mentoring and sharing my knowledge with the data community. I have mentored at Dealls and HaloTech Academy and served as a Capstone Advisor for Bangkit Academy, helping to shape the next generation of data professionals. I continuously strive to expand my skill set and stay current with industry trends by teaching aspiring students, researching new tools and technologies, writing articles, or creating data-related projects to share with the community.",
								},
							],
							tags: [],
							start: "10:30:00",
							end: "10:45:00",
							description:
								'The "Data Slices" series showcases aesthetically pleasing data visualizations created using Python libraries such as Matplotlib, Seaborn, and other advanced visualization libraries. Each visualization is meticulously curated to reveal hidden beauty and intriguing insights within seemingly ordinary data. The series covers various topics, including a popular episode where I tracked my daily mood throughout 2023 and transformed it into an engaging visualization, complete with a report card summarizing mood trends. "Data Slices" has been featured on platforms like Exsight Analytics and HaloTech Academy\'s YouTube channel, and continues to explore diverse data topics across multiple seasons.\n\n"Data Slices" is a series of aesthetic mini-visualizations that leverage the power of Python libraries such as Matplotlib, Seaborn, and other advanced visualization libraries in Python. The goal of this series is to meticulously curate each visualization to unveil the hidden beauty and fascinating insights within data that might otherwise seem ordinary. The topics covered by "Data Slices" are diverse, allowing for a wide range of visual exploration and storytelling.\n\nOne of the most captivating episodes in the "Data Slices" series involves tracking my daily mood throughout the year 2023. By transforming this data into a visual format, viewers can easily observe the ups and downs of my mood each day. This episode also features a detailed report card summarizing key metrics such as the average mood of the year, mood distribution, average mood on specific days, average mood for each month, and weekly mood progress. This particular visualization has been showcased on Exsight Analytics and discussed in a live stream on HaloTech Academy\'s YouTube channel, highlighting its popularity and impact.\n\nIn addition to mood tracking, "Data Slices" includes episodes comparing stock prices of major companies and a timeline of the Titanic\'s sinking. Each visualization within the series is designed to be both informative and visually appealing, making data analysis accessible and engaging for a broad audience.\n\nThe series is planned to continue, with future seasons each centered around a main idea, followed by multiple episodes exploring different aspects of the chosen topic. This approach ensures that "Data Slices" remains fresh and relevant, continually offering new insights and visualizations.\n\nFor more information and to view the episodes created so far, please visit the "Data Slices" GitHub repository: https://github.com/caesarmario/data-slices.',
							streaming_link:
								"https://streamyard.com/watch/VXN3VZhgkQTS?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/P3VQHZ/",
						},
						{
							id: "b35fc181-91bf-40aa-acc7-a85a3b461edc",
							name: "MalPython: Can You Trust Your Python?",
							room: "Class #3 - 4C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Satria Pradana",
									job_title: null,
									organisation: null,
									bio: "A man who is obsessed to low level technology;\nCyber security consultant by day, tinkerer by night.\nReverse engineering as hobby.\nTechnology enthusiast.\nAdvocate of open knowledge sharing.\n\nSenior Security Engineer (Red Team) at Grab.\nalso, Community Leader of Reversing.ID, a community for discussing reverse engineering stuffs.",
								},
							],
							tags: [],
							start: "10:30:00",
							end: "11:00:00",
							description:
								"As the Python gaining more popularity in development and automation, developers are now becoming the target of attack. The supply-chain attacks has emerged as a significant threat targeting developers who are not aware that their libraries or infrastructure might be infected. This talks delves into how attacker abuse, infiltrates, and compromise developer environment to achieve their goals.\n\nAttendees will gain insight into the mechanics of these attacks, understanding how seemingly benign environment can harbor malicious code. The session will further explore real-world case studies, from attacker perspective.",
							streaming_link:
								"https://streamyard.com/watch/PMA9jbMEMrT7?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/M3AMSC/",
						},
						{
							id: "57c8f4fa-6c3a-4a91-8e39-b37ddd29cf9b",
							name: "Implementing GraphDB for LLM Knowledge Bases",
							room: "Class #4 - 3A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Afif Akbar Iskandar",
									job_title: null,
									organisation: null,
									bio: "Afif Akbar Iskandar, a data science professional with over 9 years of experience in the field.\n\nHaving earned a Bachelor's degree in Mathematics and a Master's degree in Computer Science from Universitas Indonesia, Afif boasts a solid academic foundation in the field.\n\nAs a dedicated data science mentor, Afif utilizes his extensive knowledge to educate others. Driven by his enthusiasm for technology, he operates the YouTube channel \"NgodingPython,\" featuring insightful content on Python programming, data science, IoT, and beyond.",
								},
							],
							tags: [],
							start: "10:30:00",
							end: "11:00:00",
							description:
								"This talk offers a thorough and balanced review of using Graph Databases (GraphDB) to enhance the knowledge bases of Large Language Models (LLMs). Drawing from practical experiences and real-world applications, we will present both the advantages and challenges of integrating GraphDB with LLMs.\n\nWe will start by exploring the capabilities and limitations of generative AI and LLMs, emphasizing common issues such as hallucination, where models generate misleading or baseless content. The core of the presentation will delve into how GraphDB can provide a structured and reliable knowledge base that improves the contextual accuracy of LLM outputs.\n\nAttendees will gain insights into the practical implementation of GraphDB, supported by hands-on examples and case studies. We will discuss the strengths of GraphDB, such as its ability to create a robust and interconnected knowledge graph, and also address the potential drawbacks and challenges encountered during implementation.\n\nBy the end of the session, participants will have a clear understanding of the real-world impact of using GraphDB with LLMs, equipping them with the knowledge to make informed decisions about their AI projects. This talk is designed to be both informative and practical, offering deep insights into the intersection of GraphDB and LLM technologies.\n\n\n\n\nIn the rapidly evolving landscape of AI and machine learning, Large Language Models (LLMs) have shown remarkable capabilities in generating human-like text. However, one of the significant challenges faced by LLMs is the issue of hallucination, where the models generate misleading or baseless content. This talk seeks to explore whether Graph Databases (GraphDB) can be the solution to this problem, enhancing the accuracy and reliability of LLM outputs.\n\nWe will start by discussing the foundational concepts of generative AI and LLMs, setting the stage for understanding the inherent limitations of these models. The presentation will then pivot to the integration of GraphDB, detailing how this technology can provide a structured and interconnected knowledge base that grounds the outputs of LLMs in reliable data.\n\nOur session will provide a balanced view, showcasing both the benefits and challenges of using GraphDB with LLMs. Through real-world examples and hands-on case studies, attendees will learn about the practical aspects of this integration, including the enhanced data organization and retrieval capabilities offered by GraphDB. We will also candidly discuss the potential difficulties and limitations encountered during the implementation process, providing a comprehensive understanding of what it takes to successfully leverage GraphDB in AI projects.\n\nBy the conclusion of this talk, participants will be well-equipped with the knowledge to assess the real-world impact of GraphDB on LLMs. They will be prepared to make informed decisions about their AI projects, weighing both the potential advantages and the obstacles. This presentation aims to inspire and educate, providing deep, practical insights into whether GraphDB can truly transform the capabilities of LLMs and act as a game changer in the field of AI.",
							streaming_link:
								"https://streamyard.com/watch/Gkz4c8yJw48w?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/ZBNLQX/",
						},
						{
							id: "5cdbd19e-e683-4a05-9793-6330bcfe9b46",
							name: "[PBNU] Python-Driven Digital Transformation at Nahdlatul Ulama: Advanced Solutions for Document and Correspondence Management",
							room: "Class #1 - 4A",
							language: "Indonesian",
							audience_level: null,
							speakers: [
								{
									name: "Alvian Kurnianto",
									job_title: null,
									organisation: null,
									bio: "-",
								},
							],
							tags: [],
							start: "10:30:00",
							end: "11:00:00",
							description: "-",
							streaming_link:
								"https://streamyard.com/watch/9824fsvVHksX?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/PDXLHM/",
						},
						{
							id: "643ac0d2-0823-4ddd-83c5-baa72f8830ae",
							name: "PyLadies: Ask Me Anything (AMA)",
							room: "Class #6 - 3C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Georgi Ker",
									job_title: null,
									organisation: null,
									bio: 'Georgi Ker is the Director and a Fellow of the Python Software Foundation (PSF). A French citizen born and raised in Singapore, Georgi has lived in Thailand, Indonesia, and now calls Amsterdam home. During her time in Thailand, she led PyCon APAC and PyCon Thailand as conference chair. She is also a co-organizer of PyLadiesCon and co-founder of PyLadies Bangkok.\n\nA passionate advocate for Diversity & Inclusion, Georgi co-chairs the PSF’s D&I Workgroup and co-created the podcast series "The Hidden Figures of Python" with hosts Mariatta Wijaya, Cheuk Ting Ho, and Tereza Iofciu. The podcast spotlights underrepresented voices in the Python community.\n\nAs a self-taught polymath and multilingual professional, Georgi runs her own branding and visual studio, where she’s worked on notable projects like Line TV series "Strange Girl in a Strange Land", PyCon US (2022-current), Proof of Talk, and PyData London.',
								},
							],
							tags: [],
							start: "10:30:00",
							end: "11:00:00",
							description: "Learn about PyLadies with Georgi and others",
							streaming_link: "-",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/8WYLAX/",
						},
						{
							id: "1f3f0bd7-5626-4c24-b0a4-bcd99f51dd61",
							name: "Running Python on NPU",
							room: "Class #1 - 4A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Eka Antonius Kurniawan",
									job_title: null,
									organisation: null,
									bio: "AI Software Solutions Engineer at Intel",
								},
							],
							tags: [],
							start: "11:30:00",
							end: "12:00:00",
							description:
								"In the era of AI everywhere, we need to run AI applications on the edge for a long period of time. Newly introduced Neural Processing Unit (NPU) is targeted for low power sustain workload like real-time streaming applications. This talk will demo OpenVINO notebooks that can run selective deep learning models on NPU as well as introduce Intel NPU Acceleration Library to go deeper on how to run Python on NPU.",
							streaming_link:
								"https://streamyard.com/watch/P3UZx4eZdRMz?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/HUYFRK/",
						},
						{
							id: "c1b71dd4-0886-4191-9162-dc1fdbce2ea9",
							name: "Structlog in Practice",
							room: "Class #3 - 4C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Takayuki Shimizukawa",
									job_title: "IT Architect",
									organisation: "BeProud",
									bio: "'- A member of\n - BeProud Inc,\n - PyCon JP Association\n- Events organizaing\n - Python mini hack-a-thon\n - Sphinx-Users.jp\n- Sphinx maintainer\n- SNS\n - https://x.com/shimizukawa\n - @shimizukawa.bsky.social\n- Web: https://about.me/shimizukawa",
								},
							],
							tags: [],
							start: "11:30:00",
							end: "12:00:00",
							description:
								"In the era of cloud computing, it is essential to have logs that are structured using JSON and include the context of where the logs came from. This talk will show how to use structlog with Django, Celery, and Sentry in a real web application development scenario.\n\nEasy-to-use logging libraries are great because you can start using them quickly. However, in more complex systems, it's more important to have a library that can handle the complexity and consistently produce traceable logs, rather than just being easy to use.\nIn the cloud era, logs need to be in a structured JSON format so they can be handled by machines. Also, to improve traceability, the context information of each log should be included in the framework's log output. Such traceable logs can greatly reduce the effort needed for troubleshooting.\nStructlog can be customized to meet these needs, but its high customization can be a barrier at first.\nThe planned agenda is as follows:\n・Structured and contextual logging required in the cloud era for Python + Web (3 mins)\n・Recommended logging library for the cloud era: structlog (5 mins)\n・Setting up structured log output with structlog (5 mins)\n・How to use context information output by structlog effectively (3 mins)\n・Linking structlog context from Django to Celery (5 mins)\n・Linking structlog context to Sentry (5 mins)\n・Summary and Q&A (4 mins)",
							streaming_link:
								"https://streamyard.com/watch/5a52xDEZmWU4?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/NWJ877/",
						},
						{
							id: "99b43087-4623-4abe-a9c4-ec572ed48232",
							name: "Identification Lampung Scripts Using Optical Character Recognition in Python",
							room: "Class #2 - 4B",
							language: "Indonesian",
							audience_level: null,
							speakers: [
								{
									name: "Fendy Hendriyanto",
									job_title: "Machine Learning Programmer",
									organisation: "Midory Technology",
									bio: "Fendy Hendriyanto is a passionate and highly motivated individual from Bandar Lampung, Indonesia, with over 3 years of experience in technology, focusing on artificial intelligence and software engineering. He has experience in providing training, mentoring students, developing AI projects, and creating websites. Fendy holds a Bachelor's degree in Informatics Engineering from Tanri Abeng University and has published research papers and projects related to AI computer vision, focusing on image classification. He has also received honors and awards for his contributions in the field of artificial intelligence for humaniora, focusing on cultural heritage and performing arts.",
								},
							],
							tags: [],
							start: "11:30:00",
							end: "12:00:00",
							description:
								"Aksara Lampung merupakan salah satu manuskrip kuno yang ada di Nusantara. Aksara ini merupakan turunan dari warisan Dewdatt Deva Nagari (Devnagari). Aksara ini lebih dikenal juga dengan nama Had Lampung bagi masyarakat suku Lampung. Pada pembahasan topik ini akan mengulas bagaimana tulisan aksara Lampung bisa dikenali dan melakukan identifikasi dengan algoritma Computer Vision berbasis Optical Character Recognition (OCR) dengan metode Machine Learning atau Deep Learning agar masyarakat Indonesia dapat mengenal maupun mempelajari aksara Lampung yang mulai pudar bahkan belum ada digitalisasi lebih lanjut mengenai aksara Lampung.\n\nMengenal Aksara Lampung dengan OCR? Dalam Optical Character Recognition (OCR) yang merupakan bagian dari Computer Vision untuk mengidentifikasi tulisan tangan manusia secara offline maupun online. Biasanya dalam tahapan OCR, ada beberapa bagian tahapan sebelum melakukan identifikasi digital terlebih dahulu yaitu dengan cara segmentasi karakteristik tulisan tangan yang umumnya setiap tulisan manusia berbeda-beda dan tidaklah sama. Pada kasus topik ini umumnya Aksara Lampung memiliki huruf dan diakritik dalam penulisan maupun vokal penyebutannya. Namun bagaimana Aksara Lampung dapat di identifikasi dengan teknologi OCR?\n\nKasus ini sebelumnya pernah dilakukan oleh kalangan peneliti AI mengenai pengenalan aksara Lampung. Namun, sayangnya belum ada tahapan pengembangan lebih lanjut mengenai aksara Lampung saat ini. Oleh karena itu, saya akan membawakan topik ini untuk wawasan luas mengenai AI for Humaniora yang sangat penting untuk digitalisasi dan peranan dalam reservasi perlindungan warisan budaya Indonesia dengan menggunakan teknologi berbasis AI terutama dibidang Optical Character Recognition pada bagian penulisan dan manuskrip kuno.\n\nPada kesempatan ini saya akan membahas Optical Character Recognition Study Case : Identification Lampung Scripts yaitu,\n1. Apa itu Optical Character Recognition? (5 Menit)\n2. Mengenal Aksara Lampung (10 Menit)\n3. Diakritik Dalam Aksara Lampung (5 Menit)\n4. Implementasi dalam Identifikasi Aksara Lampung Dengan Basis OCR (10 Menit)\n5. Q&A (5 Menit)",
							streaming_link:
								"https://streamyard.com/watch/yNHqUhbX9QdG?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/UJAABA/",
						},
						{
							id: "66b24d67-749c-435e-a7af-f3b24d6feb0c",
							name: "Empowering the Python Community: PSF Involvement and Introducing Python Asia Organization (PAO)",
							room: "Class #5 - 3B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "KwonHan Bae",
									job_title: null,
									organisation: null,
									bio: null,
								},
								{
									name: "Iqbal Abdullah",
									job_title: "CEO",
									organisation: "LaLoka Labs LLC",
									bio: "Founder and CEO of LaLoka Labs",
								},
							],
							tags: [],
							start: "11:30:00",
							end: "12:00:00",
							description:
								"We will delve into the significance of the Python Software Foundation (PSF) and how you can engage with the global Python community through it. Additionally, be the first to hear about the launch of the Python Asia Organization (PAO), an exciting new initiative aimed at empowering the regional Python community across East and South East Asia (for now)\n\nThe Python Software Foundation (PSF) plays a pivotal role in the global Python ecosystem, fostering growth, collaboration, and innovation within the community. In this talk, we will explore what the PSF is, the benefits of being involved, and the various ways you can contribute to and benefit from this vibrant community.\n\nBut that's not all—this session will also serve as the official announcement of the Python Asia Organization (PAO), a groundbreaking initiative designed to bring together Python communities in East and South East Asia. PAO aims to create opportunities for collaboration, support community leaders, and provide financial assistance for organizing conferences and meetups. By sharing knowledge and resources, PAO will help nurture new leaders and reduce the reliance on larger entities like the PSF.",
							streaming_link:
								"https://streamyard.com/watch/BAF8GMQxS9VT?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/AVRVEH/",
						},
						{
							id: "783bbaae-93d1-4a26-a17f-762f5f244b6e",
							name: "Optimizing and scaling Generative AI applications and systems",
							room: "Class #2 - 4B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Sophia Soliven",
									job_title: null,
									organisation: null,
									bio: "Sophie Soliven is the Director of Operations for Edamama. She has over 9 years of experience in e-commerce, fintech, and retail. Over the years, she has also been sharing her knowledge and experience in both the local and the international scene.",
								},
								{
									name: "Joshua Arvin Lat",
									job_title: null,
									organisation: null,
									bio: 'Joshua Arvin Lat is the Chief Technology Officer (CTO) of NuWorks Interactive Labs, Inc. He previously served as the CTO of 3 Australian-owned companies and also served as the Director for Software Development and Engineering for multiple e-commerce startups in the past. Years ago, he and his team won 1st place in a global cybersecurity competition with their published research paper. He is also an AWS Machine Learning Hero and he has been sharing his knowledge in several international conferences to discuss practical strategies on machine learning, engineering, security, and management. He is also the author of the books "Machine Learning with Amazon SageMaker Cookbook", "Machine Learning Engineering on AWS", and "Building and Automating Penetration Testing Labs in the Cloud". Due to his proven track record in leading digital transformation within organizations, he has been recognized as one of the prestigious Orange Boomerang: Digital Leader of the Year 2023 award winners.',
								},
							],
							tags: [],
							start: "13:00:00",
							end: "13:30:00",
							description:
								"These last few years, we’ve seen a significant increase in the number of Generative AI-powered applications being developed by organizations and professionals globally. Due to the number of possible variations available when building these types of systems, companies often struggle to identify and implement the most effective approach. After a few weeks of running their Gen AI application, they start to encounter issues and challenges related to performance, scalability, and cost management.\n\nIn this session, we will discuss various best practices and strategies when building, scaling, and optimizing Generative AI systems. We'll tackle various challenges that organizations experience after they have deployed their first version of the Gen AI application and we'll discuss multiple optimization strategies to reduce costs and improve the application's performance.",
							streaming_link:
								"https://streamyard.com/watch/NMWfXgy3ArMx?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/C8FH7M/",
						},
						{
							id: "9101fe9a-998d-4d3c-af86-d5157604a71d",
							name: "From Sentiment Analysis to Intelligent Chatbots: Crafting a Unified AI Framework",
							room: "Class #1 - 4A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Irfan Abdurrahman",
									job_title: null,
									organisation: null,
									bio: "-",
								},
								{
									name: "Rakadetyo Alif",
									job_title: null,
									organisation: null,
									bio: "-",
								},
							],
							tags: [],
							start: "13:00:00",
							end: "13:30:00",
							description: "Jublia Sponsor Talk",
							streaming_link:
								"https://streamyard.com/watch/aFzkviWQtxuY?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/FUWU7U/",
						},
						{
							id: "96d13ef7-1cbd-4827-8dc7-54d00a9fb6bb",
							name: "Python Code Quality Assurance",
							room: "Class #5 - 3B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Iskandar Setiadi",
									job_title: "Division Manager",
									organisation: "HENNGE, K.K.",
									bio: "I’m an engineering manager working for a SaaS company in Tokyo, Japan.\n\nSince 2017, I have been participating in various PyCons around the world as a speaker (Japan, Indonesia, Malaysia, Italy, Hong Kong).",
								},
							],
							tags: [],
							start: "13:00:00",
							end: "13:30:00",
							description:
								"Building a product and maintaining it are two different subset of challenges. When the development has just started, your team is small and your code is still using the latest, state-of-the-art dependencies. After a while, maintainability issues become trivial as team size grows and the codebase is getting older. This talk will explore various tools that you can adapt to your codebase for progressive improvements.\n\nWhen we start building a product, our foremost priority is its functionalities. As time passes by, we most likely need to scale our team and introduce features which require complex system design. At one point, technical debt will become trivial and we need to address them before the cost of productivity loss & security risk are too high.\n\nIn this talk, the speaker will share various tools which can be utilized to continuously improve code quality, hence reducing workload needed to address technical debts. To name a few, we will explore version management tools such as pyenv, project management tools such as rye / poetry, typing check tools such as pyright / mypy, dependency update tools such as renovate / dependabot, and others (pre-commit, etc). Afterwards, we will briefly talk about security as part of code quality assurance.",
							streaming_link:
								"https://streamyard.com/watch/GnHXFFwq8Hkd?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/J9JXJH/",
						},
						{
							id: "4d8b35d3-7d54-494d-b0e5-e229c0d8515c",
							name: "Alternative A/B Testing: Using Causal Inference to Measure Impact of Your Experiment",
							room: "Class #4 - 3A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Aris Budi Wibowo",
									job_title: null,
									organisation: null,
									bio: "A data professional with over five years of experience in the fintech, e-commerce, and banking industries. He has led projects using Python to enhance customer behavior models, improve product adoption, and increase operational efficiency, delivering measurable business outcomes.\n\nPreviously, Aris worked with major banks and one of the biggest e-commerce platforms in Indonesia, where he developed predictive models for cross-selling and operational improvements, driving gains in customer engagement and process optimization. He is passionate about leveraging Python and machine learning to transform data into actionable insights that drive innovation and growth.",
								},
							],
							tags: [],
							start: "13:00:00",
							end: "13:30:00",
							description:
								"Discover powerful alternatives to A/B testing for measuring experiment impact using causal inference techniques. This talk will demonstrate how we can leverage the matching process methods, such as propensity score matching to reduce bias when comparing groups, providing reliable metrics even when traditional A/B testing isn't feasible. Learn practical applications, and new approaches, and gain actionable insights to broaden your data analysis toolkit and effectively measure the impact of your features or products.\n\nIn this talk, we will learn how Python can be used to solve the real-world problem of measuring the impact of experiments without relying solely on A/B testing. By focusing on causal inference, particularly the matching process and propensity score matching, the audience will learn how to reduce bias when comparing groups. This method is handy for situations where it was not possible to design a proper A/B test initially, making it a practical and valuable alternative.\n\nThis method is relevant based on my experience as a data person who wants to measure the impact on the company itself, offering deep and unique perspectives on measuring experiment impact without A/B testing.\n\nThe talk starts with an introduction to the limitations of A/B testing, followed by an in-depth explanation of the matching process, specifically propensity score matching. Practical demonstrations and case studies will illustrate the concepts, and a brief Q&A session will ensure clarity and address audience queries.\n\nAttendees hopefully will gain actionable insights into alternative methods for measuring experiment impact, broadening their toolkit for data analysis and product evaluation.",
							streaming_link:
								"https://streamyard.com/watch/iSPRXY7pdXHp?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/ECJZBN/",
						},
						{
							id: "477f337c-ce0f-497a-8fc0-7b55d47539c0",
							name: "GraphQL in Python",
							room: "Class #6 - 3C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Marcin Gębala",
									job_title: "Principal Developer",
									organisation: "Saleor Commerce",
									bio: "I'm a Principal Developer at Saleor Commerce (https://github.com/saleor/saleor), where I work on the core GraphQL API of the largest open-source e-commerce platform written in Python. In my free time, I enjoy cycling, making music, and traveling. I'm based in Wrocław, Poland.",
								},
							],
							tags: [],
							start: "13:00:00",
							end: "13:30:00",
							description:
								"GraphQL is a more flexible alternative to REST for building web APIs and thus is becoming a strong foundation for any modern web stack. This is especially true where static HTML templates are not enough or a sophisticated single-page interface is needed. In this talk, we will look at various solutions for building GraphQL APIs in Python to power modern, dynamic web apps.\n\nGraphQL is establishing itself as a foundation of the modern web development stack, particularly where a dynamic, single-page UI is required. It unlocks many great benefits, some of which are:\n\n    Fetching only the required data necessary to render particular views, while eliminating the need to call and combine data from multiple endpoints.\n    Developer experience through incredible out-of-the-box tooling available - interactive API explorers or code generators for statically typed languages used in the frontend.\n    Ability to combine various APIs under a single gateway with federations.\n\nThere are multiple libraries and approaches to build GraphQL APIs in Python. In this talk, we will look at two different approaches with popular libraries: schema-first approach with Ariadne (https://github.com/mirumee/ariadne) and code-first approach with Graphene (https://github.com/graphql-python/graphene). We'll take a look at the architecture and different aspects of a Python web app that serves a GraphQL API:\n\n-Basics of GraphQL - the most essential benefits, how it differs from REST, the main concepts, and examples.\n-Schema-first approach with Ariadne - how to design the schema and implement queries and mutations to interact with our data.\n-Code-first approach with Graphene - how to represent types and operations with classes, examples of a large production web app built with Django and Graphene, mapping Django models to GraphQL types.\n-Common web-app recipes - how to deal with authentication, permissions, or database performance in a GraphQL-first backend app.",
							streaming_link:
								"https://streamyard.com/watch/2ZayJAGa2aqA?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/XQYTQR/",
						},
						{
							id: "c4f06db1-3685-41f5-9ec9-f3f1d2b91387",
							name: "Python at Scale: Building a Node Autoscaling Engine with a Distributed System",
							room: "Class #3 - 4C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Muhammad Yuga Nugraha",
									job_title: null,
									organisation: null,
									bio: "-",
								},
								{
									name: "Restu Haqqi Muzakir",
									job_title: null,
									organisation: null,
									bio: "-",
								},
							],
							tags: [],
							start: "13:00:00",
							end: "13:30:00",
							description:
								"Autoscaling is crucial for organizations that need to adjust their computing resources based on user demand, especially during peak times. While many cloud services offer this feature, it can be challenging to implement autoscaling in environments where it is not directly supported.\n\nIn this talk, we will explore how to create an autoscaling system that is compatible with any cloud service, drawing inspiration from Kubernetes, involves developing a cloud-agnostic autoscaling system. This approach allows organizations to utilize autoscaling capabilities without being restricted to a specific cloud provider.",
							streaming_link:
								"https://streamyard.com/watch/cKUaMR25jSHR?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/UMEBNX/",
						},
						{
							id: "10003b0a-c562-41ae-8b92-f5c9291fa198",
							name: "Building Responsible Generative AI in Python's Ecosystem",
							room: "Class #4 - 3A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Ahmad Mustafid",
									job_title: null,
									organisation: null,
									bio: "-",
								},
							],
							tags: [],
							start: "13:40:00",
							end: "13:55:00",
							description:
								"The advancement of generative AI technologies has opened new frontiers in creativity and automated creation. However, there are several issues and concerns that need to be mitigated.\n\nThis talk explores the essentials of building responsible generative AI within Python ecosystems. It begins by exploring Python's integral role in AI/ML development, providing a foundation for generative AI. The discussion then progresses to more advanced topics, including Multimodal Retrieval-Augmented Generation (RAG) systems and the integration of vector databases to enhance AI capabilities.\n\nKey topics include ensuring fairness, transparency, and accountability of AI models, mitigating biases, and safeguarding user privacy. Emphasis will be placed on conceptual techniques to integrate ethical considerations into AI development, thereby promoting trust and positive societal impact.",
							streaming_link:
								"https://streamyard.com/watch/APPqxRYmmNv6?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/EFWED9/",
						},
						{
							id: "77729549-9e6e-48e5-8161-97d6ee2a4949",
							name: "Building a Predictive System for Agricultural Commodity Prices",
							room: "Class #2 - 4B",
							language: "Indonesian",
							audience_level: null,
							speakers: [
								{
									name: "Arsy Opraza Akma",
									job_title: "Curriculum Developer",
									organisation: "Dicoding",
									bio: "Arsy Opraza Akma is currently a Curriculum Developer at Dicoding, where he focuses on backend development and Cloud. He has also participated in mentorship programs through the Goto Impact Foundation, Bangkit Academy as Advisor and has prior experience as an intern software engineer at both Rey.id and Kompas Gramedia. Arsy is actively involved in various tech communities and shares his knowledge and experience through platforms like GitHub, LinkedIn, and his personal blog on Medium​.",
								},
							],
							tags: [],
							start: "13:40:00",
							end: "13:55:00",
							description:
								"Agricultural commodities such as shallots, red chili, and cayenne pepper are highly produced, serving not only the local community but also neighboring districts and cities. However, farmers often face income losses as their selling prices are dictated by collectors, deviating from the actual market prices. This discrepancy negatively impacts farmers' productivity. Our proposed research aims to address this issue by developing a predictive system for commodity selling prices using data mining techniques, specifically multiple linear regression. This method will analyze factors such as rainfall and total production to forecast prices, enabling us to provide farmers with accurate selling price recommendations for specific periods. By aligning farmers' selling prices with market trends, this system aims to minimize their losses and enhance productivity. This proposal outlines the development and implementation of this predictive system, highlighting its potential benefits for the agricultural sector.\n\nIn this talk, we will explore the development of a predictive system for agricultural commodity prices using data mining techniques, focusing on shallots, red chili, and cayenne pepper. Farmers often face significant income losses due to discrepancies between market prices and prices set by intermediaries. Our system aims to address this issue by providing accurate price recommendations, thereby aligning farmers' selling prices with market trends and enhancing their productivity.\n\nWe will delve into the methodology of our predictive system, which employs multiple linear regression to analyze key factors such as rainfall and total production. By identifying patterns in historical data, our system can forecast commodity prices for specific periods, offering valuable insights to farmers.\n\nJoin us to learn how data-driven solutions can revolutionize the agricultural sector, empower farmers with better price predictions, and ultimately lead to increased productivity and profitability. This talk is ideal for data scientists, agricultural researchers, and anyone interested in the application of machine learning in real-world scenarios.",
							streaming_link:
								"https://streamyard.com/watch/9yCRvAwpAPP3?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/S9EYNA/",
						},
						{
							id: "239f88e5-16fa-463d-925c-cbf229619179",
							name: "Leveraging Python to create Accurate AI Automated News Generation Content. (without a need to understand LLM deeply)",
							room: "Class #1 - 4A",
							language: "Indonesian",
							audience_level: null,
							speakers: [
								{
									name: "Rexsy Bima Trima Wahyu",
									job_title: null,
									organisation: null,
									bio: "Python enthusiast, python freelancer, and mentor for Remote Worker Indonesia",
								},
							],
							tags: [],
							start: "13:40:00",
							end: "13:55:00",
							description:
								"In the digital age, the wave of information is vast and relentless. With the rise of social media and ‘short-like’ platforms such as TikTok, the demand for succinct, accurate, and engaging news content is ever-increasing. However, the current information landscape often overwhelms users with a deluge of content, making it challenging to sift through and identify relevant news.\n\nArtificial Intelligence (AI) itself has been advancing ever since, integrating to various sectors including news content generation. AI’s ability to analyze large volumes of data, identify patterns, and generate content has opened up new possibilities in the field of journalism.\n\nTo address these issues, this python project will leverages AI to automate the generation of one-minute accurate news content, specifically designed for ‘short-like’ platforms. This project aims to provide users with concise, relevant, and engaging news, tailored to the unique consumption patterns of today’s digital audience.\n\nThis proposal will talk about our Python project that will leverage advanced technologies to identify trending news, generate accurate news scripts, download related images, and even generate audio in the persona of a popular cartoon news anchor. The specifics of the workflow and the technologies used will be in notes for organiser only and will be talked about further in detail during the presentation.\n\nThis project will also try to address the challenge(s) about LLM, such one is how Large Language Models work against newest data by using certain tools to make sure the generated news we have is accurate and up to date",
							streaming_link:
								"https://streamyard.com/watch/vKeE3MMc2b4w?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/BUMSJ9/",
						},
						{
							id: "eaa4b56d-cdcb-493c-b364-23c28b66452f",
							name: "Make use of your Python skill as an Office Worker",
							room: "Class #3 - 4C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Dima Dinama",
									job_title: "Industrial Patron",
									organisation: "Kementerian Perindustrian",
									bio: "Text",
								},
							],
							tags: [],
							start: "13:40:00",
							end: "13:55:00",
							description:
								"We all love python. But not all of us is fortunate enough to land a job as a python programmer or developer. Maybe some of us currently doing some office jobs that is not using python and doesn't need programming language at all. But it doesn't make our python skill useless. As an open-source programming language python has a lot of library that can make our life easier. In this talk we will explore some of python library and try to use it to do our office job faster and give more time for us to rest.\n\nIn this talk we will learn about python library that are available and can help us to do our job faster as an office worker. For each topic there will be some explanation about the library, how to use, and some example of their implementation. I will mainly introduce three topics/libraries we can do using our python skill:\n\n    GUI Automation using PyAutoGUI\n    In this topic we will learn how to manipulate mouse and keyboard input so we can complete repetitive task involving GUI program.\n    Web Scraping using BeautifulSoup or Selenium\n    In this topic we will learn how to scrape or gather information from webpages in a fast way.\n    Excel Manipulation using Openpyxl or Pandas\n    Lastly, in this topic we will learn how to process data in excel especially in large data that needs complex formula.\n\nHopefully after attending this session we can still love and use our python skill even though we are not working as a programmer.",
							streaming_link:
								"https://streamyard.com/watch/RnD4RKx5NxZK?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/BEDTBS/",
						},
						{
							id: "ea712b8d-8d95-44ed-a49d-561c702dc80e",
							name: "Writing Python code like Typescript",
							room: "Class #5 - 3B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Bima Adi",
									job_title: "Software Engineer",
									organisation: "Quantus Telematika Indonesia",
									bio: "I am Software Engineer from Bandung Indonesia with 4 years working experience, currently work at Quantus Telematika Indonesia. I am exicited to explore new technology, it's feels like adventure for me. I think a good software engineer must explore new technology. New tech always come every year. If we don't keep up with technology, we will leave behind.",
								},
							],
							tags: [],
							start: "13:40:00",
							end: "13:55:00",
							description:
								"Javascript developer create Typescript to make javascript had typesafety. This typesafety make project easier to read and has less bug. Can typesafety like typescript be achieve in python?\n\nJavascript developer create Typescript to make javascript has typesafety. This typesafety make project easier to read and has less bug. Can typesafety like typescript be achieve in python?\nShort answer Yes. Surprisingly type already built in in python (since python 3.5) you don't need extra depedencies. How typesafety make code readable and has less bug? How we implement typesafety in python? I will show you in this short talk.",
							streaming_link:
								"https://streamyard.com/watch/aWt2hwSn4sZS?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/NZBNMR/",
						},
						{
							id: "c781cff6-c473-4150-81bf-b22b245b85cc",
							name: "Automating YAML Validation with Custom Pre-Commit Hooks",
							room: "Class #6 - 3C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Okza Pradhana",
									job_title: "Data Engineer",
									organisation: "Singaporean Multinational Tech Company",
									bio: "-",
								},
							],
							tags: [],
							start: "13:40:00",
							end: "13:55:00",
							description:
								"Ensuring the integrity and correctness of data is crucial, including configuration files like YAML. YAML files are used for configuration in various applications, kubernetes manifests and CI/CD pipelines. In our cases we used YAML files to creates Airflow DAGs in human readable format that will be processed by generator to generate numerous of DAGs compared to creating from scratch by using code. Everyone can make an Airflow DAG from YAML files.\n\nHowever it is prone to human error due to their strict syntax and structure. These mistakes can lead to significant issues when deploying to production, causing downtime and unplanned maintenance.\n\nIn this talk, we will explore how to leverage custom pre-commit hooks to automate the validation of YAML files before they are committed, pushed, and deployed. By integrating these checks into your development workflow, you can catch errors early, maintain high standards of code quality, and empower your team to deploy with confidence.",
							streaming_link:
								"https://streamyard.com/watch/rDDREjrzuFxa?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/SXFHFR/",
						},
						{
							id: "4bbd498b-0bf8-4434-980f-06fd63bccc82",
							name: "Securing AI applications by building a custom LLM Vulnerability Scanner",
							room: "Class #2 - 4B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Sophia Soliven",
									job_title: null,
									organisation: null,
									bio: "Sophie Soliven is the Director of Operations for Edamama. She has over 9 years of experience in e-commerce, fintech, and retail. Over the years, she has also been sharing her knowledge and experience in both the local and the international scene.",
								},
								{
									name: "Joshua Arvin Lat",
									job_title: null,
									organisation: null,
									bio: 'Joshua Arvin Lat is the Chief Technology Officer (CTO) of NuWorks Interactive Labs, Inc. He previously served as the CTO of 3 Australian-owned companies and also served as the Director for Software Development and Engineering for multiple e-commerce startups in the past. Years ago, he and his team won 1st place in a global cybersecurity competition with their published research paper. He is also an AWS Machine Learning Hero and he has been sharing his knowledge in several international conferences to discuss practical strategies on machine learning, engineering, security, and management. He is also the author of the books "Machine Learning with Amazon SageMaker Cookbook", "Machine Learning Engineering on AWS", and "Building and Automating Penetration Testing Labs in the Cloud". Due to his proven track record in leading digital transformation within organizations, he has been recognized as one of the prestigious Orange Boomerang: Digital Leader of the Year 2023 award winners.',
								},
							],
							tags: [],
							start: "14:00:00",
							end: "14:30:00",
							description:
								"Despite the significant increase in the number of Generative AI-powered applications being developed by companies and professionals globally, many organizations are unable to secure their deployed applications properly. One of the practical techniques to secure Gen AI systems along with self-hosted LLMs involves building a vulnerability scanner that checks for vulnerabilities such as prompt injection. In this session, we will discuss how to build a custom scanner to help teams identify security issues specific to their self-hosted LLMs.",
							streaming_link:
								"https://streamyard.com/watch/fpwV5mMgGtdf?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/KHVZPJ/",
						},
						{
							id: "37b96ff9-8788-445c-af3c-f8996660054a",
							name: "Empowering Real-World Applications with Graph Neural Networks in Python",
							room: "Class #6 - 3C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Fehru Mandala Putra",
									job_title: null,
									organisation: null,
									bio: "I am a dedicated mathematics student with a deep understanding of the theoretical aspects of machine learning and its practical implementation. My academic background has equipped me with a strong foundation in mathematical principles, which I apply to solving complex AI problems. I am passionate about exploring new technologies and sharing knowledge with the community to drive innovation and excellence in AI development.",
								},
							],
							tags: [],
							start: "14:00:00",
							end: "14:30:00",
							description:
								"Graph Neural Networks (GNNs) are revolutionizing how we handle complex data structures in various domains, from social networks to molecular biology. In this talk, we will explore how Python can harness the power of GNNs to solve real-world problems. Attendees will learn the fundamentals of GNNs, practical applications, and how to implement these networks using Python libraries. This session aims to empower developers to leverage GNNs in their projects, enhancing their ability to analyze and interpret intricate data patterns.\n\nIn this 30-minute talk, we will delve into the world of Graph Neural Networks (GNNs) and their practical applications in solving real-world problems. The session will begin with an introduction to the core concepts of GNNs, highlighting their unique ability to process and analyze graph-structured data. We will then explore several case studies demonstrating how GNNs can be applied in various fields, such as social network analysis, recommendation systems, and bioinformatics.\n\nParticipants will gain hands-on knowledge of implementing GNNs using popular Python libraries, including PyTorch Geometric. The talk will also cover best practices for designing and training GNN models, addressing common challenges, and optimizing performance. By the end of the session, attendees will have a solid understanding of GNNs and be equipped with practical skills to apply them in their own projects.",
							streaming_link:
								"https://streamyard.com/watch/97r6xxd3xZhk?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/33DVYQ/",
						},
						{
							id: "c66d380e-ed79-4dce-93d6-5ed48c97353d",
							name: "AMA and conversation about contributing to Python and open source",
							room: "Class #5 - 3B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Mariatta Wijaya",
									job_title: "Lead Software Engineer",
									organisation: "CMD Limes",
									bio: "-",
								},
							],
							tags: [],
							start: "14:00:00",
							end: "14:30:00",
							description:
								"An unstructured conversation about contributing to Python and open source, hosted by Mariatta Wijaya",
							streaming_link: "-",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/GWXGD8/",
						},
						{
							id: "553c58c7-7418-4cab-b4ee-abeaac265887",
							name: "Empowering Creativity: Leveraging Python and LLMs for Innovative 3D Printing Projects",
							room: "Class #1 - 4A",
							language: "Indonesian",
							audience_level: null,
							speakers: [
								{
									name: "Ibrahim Hanif",
									job_title: "Software Engineer",
									organisation: "ADXAsia",
									bio: "-",
								},
							],
							tags: [],
							start: "14:00:00",
							end: "14:30:00",
							description:
								"In this talk, we will explore how Python and Large Language Models (LLMs) can be utilized to unlock new creative potentials in 3D printing. We will delve into practical applications and real-world examples where these technologies come together to design, prototype, and produce unique 3D-printed objects. Attendees will learn about the integration of Python scripts and LLM-driven design processes, showcasing how these tools can simplify and enhance the creative workflow.\n\n3D printing has revolutionized the way we approach manufacturing and design, allowing for rapid prototyping and the creation of complex geometries. However, the design process can still be challenging, especially for those new to the field. This is where Python and LLMs come into play.",
							streaming_link:
								"https://streamyard.com/watch/qsAevYhQDepR?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/RE3DMQ/",
						},
						{
							id: "a99aadf3-c7e6-408a-b339-1ecd0c9ed697",
							name: "Playing Around with Locust Load Testing Tools",
							room: "Class #4 - 3A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Burhanuddin Ahmad",
									job_title: "SWE",
									organisation: "Tabsquare",
									bio: "Sr. Software Engineer at Tabsquare.ai\n\nHaving few years of experience working and implementing tech in some industries like restaurant, hotel and property, digital marketing and so on.\n\nAlso core team of Javascript community SurabayaJS 🫢.",
								},
							],
							tags: [],
							start: "14:00:00",
							end: "14:15:00",
							description:
								"Locust is a popular load testing tools written in Python and scripted in Python too. It's easy to get started with Locust even me my self as a non Python developer can write the script easily as long as know some basic rules in Python.\n\nWe want to show the audience that how easy it is to play with load testing tools like Locust from installing it to write our first script. It also has a beautiful interface that already built-in and no more additional setup.",
							streaming_link:
								"https://streamyard.com/watch/J7H5AZB4egVj?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/UZUBFN/",
						},
						{
							id: "94720717-9bc9-4762-b0e6-d0acf317b0ca",
							name: "Pythonic Ways to Build Serverless Apps in AWS and how to migrate from Frameworks",
							room: "Class #3 - 4C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Arnel Jan Sarmiento",
									job_title: null,
									organisation: null,
									bio: "Arnel is an Senior Python Backend Engineer specializing in cloud-native and serverless applications in the AWS Cloud. He works at Elemnta, a Sydney-based Fintech Company that provides digital products specialized for the needs of financial advisors. He is deeply involved in the Python ecosystem and actively contributes to its growth and integration in software solutions. As the Community Lead of DurianPy, Davao's official Python User Group, he is dedicated to fostering innovation and collaboration to drive advancements in Davao's Tech Landscape.",
								},
							],
							tags: [],
							start: "14:00:00",
							end: "14:30:00",
							description:
								"Serverless applications have transformed software development and deployment. Building serverless applications with Python on AWS presents unique challenges, especially for developers accustomed to frameworks like Django, Flask, and FastAPI. This talk explores strategies to maintain the developer experience of these frameworks while gaining the benefits of serverless. We will cover key patterns and tools, such as Lambdalith, AWS Chalice, AWS Lambda Powertools, single-purpose function patterns, event-driven architecture, and Infrastructure as Code (IaC) tools.",
							streaming_link:
								"https://streamyard.com/watch/7jj7ZsfKX4A9?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/VHVRY8/",
						},
						{
							id: "d9d2042d-3f52-488a-859d-7c54715fcc9a",
							name: "Hacking and Securing Serverless Generative AI applications",
							room: "Class #6 - 3C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Joshua Arvin Lat",
									job_title: null,
									organisation: null,
									bio: 'Joshua Arvin Lat is the Chief Technology Officer (CTO) of NuWorks Interactive Labs, Inc. He previously served as the CTO of 3 Australian-owned companies and also served as the Director for Software Development and Engineering for multiple e-commerce startups in the past. Years ago, he and his team won 1st place in a global cybersecurity competition with their published research paper. He is also an AWS Machine Learning Hero and he has been sharing his knowledge in several international conferences to discuss practical strategies on machine learning, engineering, security, and management. He is also the author of the books "Machine Learning with Amazon SageMaker Cookbook", "Machine Learning Engineering on AWS", and "Building and Automating Penetration Testing Labs in the Cloud". Due to his proven track record in leading digital transformation within organizations, he has been recognized as one of the prestigious Orange Boomerang: Digital Leader of the Year 2023 award winners.',
								},
							],
							tags: [],
							start: "15:00:00",
							end: "15:30:00",
							description:
								"These last few years, we’ve seen a significant increase in the number of serverless generative AI-powered applications being developed by organizations and professionals globally. Unfortunately, companies are unable to keep up with the security considerations and requirements and often end up unprepared for various types of attacks. There are different ways to attack serverless Generative AI-powered systems and most organizations are not equipped with the skills to secure these systems. In this talk, we will talk about the different ways these systems can be attacked and then we will share relevant strategies to protect these systems.",
							streaming_link:
								"https://streamyard.com/watch/UFfSXpiH5xSx?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/UG7AVC/",
						},
						{
							id: "a5eab324-4ede-47e3-8c64-88c2394f8812",
							name: "How to learn Japanese with Python",
							room: "Class #3 - 4C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Takanori Suzuki",
									job_title: "Chair",
									organisation: "PyCon JP Association",
									bio: 'Takanori is the Chair of PyCon JP Association(www.pycon.jp) and Co-Chair of PyCon JP 2024.\nHe is also a director of BeProud Inc.(www.beproud.jp), and his title is "Python Climber".\nCurrently he teaches Python to beginners as a lecturer at Python Boot Camp(pycamp.pycon.jp) all over Japan.\nIn addition, he published several Python books.\nHe plays trumpet, climbs boulder, loves ferrets, beer and Lego.',
								},
							],
							tags: [],
							start: "15:00:00",
							end: "15:30:00",
							description:
								"Japanese is reportedly one of the most difficult languages for English speakers to learn.\n(FSI language difficulty: https://www.fsi-language-courses.org/blog/fsi-language-difficulty/)\nThere are many reasons for this, including the fact that there are three types of characters: hiragana, katakana, and kanji, and that words are not separated by spaces.\nIn this talk, I will first introduce what makes Japanese different from many European languages.\nThen I will show how Python and natural language processing libraries can be used to support Japanese language learning.",
							streaming_link:
								"https://streamyard.com/watch/F9bmRb6EeAmf?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/ZBEVZK/",
						},
						{
							id: "9ece9d2c-aea0-4b73-8f9b-7f8077aee89d",
							name: "Enhancing Actively Attacked WordPress Vulnerability Detection with Python, WP-CLI Vulnerability Scanner, and Imunify360 Incident Logs",
							room: "Class #2 - 4B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Nizar Meilani",
									job_title: "Linux System Administrator",
									organisation: "DomaiNesia",
									bio: "I am Nizar Akbar Meilani, a Linux System Administrator in shared hosting company DomaiNesia. I am a System Administrator which helps everything in shared hosting runs smoothly and securely. As a good System Administrator, my motto is precise data from analysis is better than assumptions.",
								},
							],
							tags: [],
							start: "15:00:00",
							end: "15:30:00",
							description:
								"This paper presents a solution for detecting actively exploited WordPress vulnerabilities in a shared hosting environment. Recent reports indicate a significant increase in reported vulnerabilities, highlighting growing risk. Analysis from Patchstack shows a 24% rise in vulnerabilities from 2022 to 2023 [1], while WPScan reports substantial increase in reports from 2014, 2022, 2023, until 2024 especially among free plugins and themes [2]. Given these findings, detecting these vulnerabilities is crucial, particularly in shared hosting where users may lack awareness. Leveraging CloudLinux’s Imunify360 WAF rules, which includes WordPress vulnerability signatures, this study integrates incident logs from Imunify360’s SQLite database, WP-CLI Vulnerability Scanner, and Python for detection. By correlating WAF-triggered attacks, Static Analysis of version from WP-CLI Vulnerability, modifying date of plugin, theme, and core WordPress, the approach enhances the identification of actively exploited vulnerabilities.\n\nThis paper addresses the pressing challenge of detecting actively exploited WordPress vulnerabilities within shared hosting environments. Recent studies have underscored a concerning uptick in reported vulnerabilities, with Patchstack highlighting a 24% increase from 2022 to 2023 [1]. WPScan's findings reveal significant growth since 2014, particularly among free plugins and themes [2]. Detecting these vulnerabilities is crucial, especially in shared hosting where users often lack awareness of potential risks.\n\nTo tackle this issue, the study leverages CloudLinux's Imunify360 WAF rules, specifically designed with WordPress vulnerability signatures. It integrates incident logs from Imunify360's SQLite database, alongside tools like WP-CLI Vulnerability Scanner and Python, for comprehensive detection methods. By correlating WAF-triggered attacks with static analysis of plugin, theme, and core WordPress file modifications, the approach enhances the precision in identifying actively exploited vulnerabilities.\n\nThis research contributes valuable insights and practical methodologies aimed at fortifying WordPress security measures, particularly in environments where the risk of exploitation is heightened.",
							streaming_link:
								"https://streamyard.com/watch/UWbfhTDanWDK?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/VMVYTA/",
						},
						{
							id: "6dca01d6-2861-46ee-bdc3-21f39f39989b",
							name: "Enlightened with Python: Is It Making a Difference or Making Things Worse? (Empowering Citizens with Python for Better Public Policy)",
							room: "Class #4 - 3A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Yudhapratama Nugraha",
									job_title: null,
									organisation: null,
									bio: "Hi, I'm Yudha. My passion lies in optimizing policies to their fullest potential. I’m currently a Master's student at the School of Architecture, Planning, and Policy Development, and I also work as a data analyst at Jejakin, an environmentally-focused company.\n\nI aim to solve real-world problems through data. My academic journey is centered around economic development, data science, and public policy analysis. Specializing in Urban Analytics, I’m committed to uncovering insights and driving impactful solutions. I thrive on challenges and look forward to shaping a sustainable future using data.",
								},
							],
							tags: [],
							start: "15:00:00",
							end: "15:30:00",
							description:
								"In this session, I will demonstrate how Python can be leveraged to analyze the impact of public policies. While it might sound complex, Python simplifies the process significantly. Attendees will see visualizations that can tell a 'story' using geemap and Google Earth Engine. I will showcase the power of Python through simple yet powerful commands supported by these tools. By incorporating some statistical analysis, we can determine the actual impact of the development.\n\nAs technologists or enthusiasts, we can contribute to society by presenting data-driven insights, even if we cannot directly implement policies ourselves. This session aims to show that with basic programming skills, anyone can analyze and inform public discourse. If we cannot change policies, we can at least tell !.",
							streaming_link:
								"https://streamyard.com/watch/ACpTj37HEsmm?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/S9HD8R/",
						},
						{
							id: "d8c900fa-39bc-4ae8-b8b7-40d4af5933bf",
							name: "Lightning Talks dan Closing",
							room: "Main Hall",
							language: "Indonesian",
							audience_level: null,
							speakers: [
								{
									name: "PyCon Organizer",
									job_title: null,
									organisation: null,
									bio: "-",
								},
							],
							tags: [],
							start: "15:30:00",
							end: "17:00:00",
							description: "Lighting Talks dan Closing",
							streaming_link:
								"https://streamyard.com/watch/4A6emAvXn9DE?embed=true",
							pretalk_link: "-",
						},
					],
				},
				{
					name: "Day 2",
					date: "2024-10-26",
					schedules: [
						{
							id: "af1e15bc-aa4d-4a72-811f-62841cf8b6bd",
							name: "Opening Session #1",
							room: "Main Hall",
							language: "Indonesian",
							audience_level: null,
							speakers: [
								{
									name: "PyCon Organizer",
									job_title: null,
									organisation: null,
									bio: "-",
								},
							],
							tags: [],
							start: "09:00:00",
							end: "09:30:00",
							description: "Opening Session",
							streaming_link:
								"https://streamyard.com/watch/FgsHPM4yi5Ph?embed=true",
							pretalk_link: "-",
						},
						{
							id: "4a28854a-aa66-4e8d-bfe9-d86ba82b9706",
							name: "The Language of Programming Languages",
							room: "Main Hall",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Anthony Shaw",
									job_title: null,
									organisation: null,
									bio: "-",
								},
							],
							tags: [],
							start: "09:30:00",
							end: "10:15:00",
							description: "-",
							streaming_link:
								"https://streamyard.com/watch/VqvstAPV8rna?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/3NLBYM/",
						},
						{
							id: "62ed3e3b-9fcf-4715-9f18-7f310b2df4d6",
							name: "Empowered by Community: The Psychology Behind Open Source Leadership",
							room: "Main Hall",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Georgi Ker",
									job_title: null,
									organisation: null,
									bio: 'Georgi Ker is the Director and a Fellow of the Python Software Foundation (PSF). A French citizen born and raised in Singapore, Georgi has lived in Thailand, Indonesia, and now calls Amsterdam home. During her time in Thailand, she led PyCon APAC and PyCon Thailand as conference chair. She is also a co-organizer of PyLadiesCon and co-founder of PyLadies Bangkok.\n\nA passionate advocate for Diversity & Inclusion, Georgi co-chairs the PSF’s D&I Workgroup and co-created the podcast series "The Hidden Figures of Python" with hosts Mariatta Wijaya, Cheuk Ting Ho, and Tereza Iofciu. The podcast spotlights underrepresented voices in the Python community.\n\nAs a self-taught polymath and multilingual professional, Georgi runs her own branding and visual studio, where she’s worked on notable projects like Line TV series "Strange Girl in a Strange Land", PyCon US (2022-current), Proof of Talk, and PyData London.',
								},
							],
							tags: [],
							start: "10:30:00",
							end: "11:15:00",
							description: "-",
							streaming_link:
								"https://streamyard.com/watch/Q3MasDvWZFpV?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/QEHCKF/",
						},
						{
							id: "127c2473-7d3b-4d1b-86bd-4f5006e9c5fb",
							name: "Multimodal Retrieval Augmented Generation in Action",
							room: "Class #4 - 3A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Esther Irawati Setiawan",
									job_title: "Associate Professor",
									organisation: "Institut STTS",
									bio: "Esther is an Associate Professor with more than ten years of research in Natural Language Processing, Machine Learning, Social Network/Media Analysis, and professional work experience in the computer software industry and machine learning. She is the Head of the Department of the Diploma of Information Systems and Bachelor of Professional Informatics Program at Institut Sains dan Teknologi Terpadu Surabaya (ISTTS).\nSince 2023, Esther has been selected as a Google Developer Expert in Machine Learning. Her involvement began as the founder of Google Developer Group (GDG) Surabaya. And now, she is the GDG Surabaya organizer. She is also a Cloud Champion Innovator in AI / ML and one of the Google Dev Library Contributors. As an Associate Professor and Women Ambassador IEEE IES, Esther has over a decade of experience in community contributions and machine learning.\n\nEsther has created projects in Machine Learning since 2006, mainly on Natural Language Processing and some in Computer Vision, and has published numerous papers in IEEE. She is also affiliated with several other professional groups, a volunteer of the Directorate of Research, Development, and Innovation at IAIS (Indonesia Artificial Intelligence Society), and a member of various machine learning organizations such as IEEE IES, Women in Engineering, IEEE ISTTS Student Branch Chancellor, Indonesian Association for Pattern Recognition, and Indonesia Association of Computational Linguistics. Recently, she's been selected as a Woman Ambassador for IEEE IES 2024. She’s also a partner researcher at the Science and Technology Center of Excellence, Institut Teknologi Sepuluh Nopember, and the School of Media Sciences, Tokyo University of Technology. She has hosted and participated in numerous national and international tech talks.",
								},
							],
							tags: [],
							start: "11:30:00",
							end: "12:00:00",
							description:
								"In this talk, I will explore the cutting-edge technology of Multimodal Retrieval Augmented Generation (MRAG) using Python. This innovative approach combines the power of natural language processing, computer vision, and machine learning to enhance the generation of text and images based on complex queries. We'll elaborate into how MRAG leverages large language models and retrieval systems to provide contextually rich and accurate outputs.\n\nThe session will cover:\n- An introduction to MRAG and its applications\n- Key components and architecture of MRAG systems\n- How Python libraries and frameworks can be utilized to implement MRAG\n- Real-world examples and use cases demonstrating the effectiveness of MRAG\n- Live demo to build a basic MRAG system\n- Best practices and challenges in deploying MRAG in production environments\n\nBy the end of this talk, attendees will have a solid understanding of how to harness the power of MRAG for enhanced text and image generation, providing richer and more relevant results in various applications.",
							streaming_link:
								"https://streamyard.com/watch/M6TS5DuJTiY4?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/ZMRMRM/",
						},
						{
							id: "d18905e3-f934-423e-9210-8e946ad8629d",
							name: "Empowering your real life with Raspberry Pi",
							room: "Class #2 - 4B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Shintaro Matsudo",
									job_title: "Engineering manager",
									organisation: "RevComm",
									bio: "Shintaro Matsudo is a Senior Backend Engineer.\nHe specializes in backend development, DevOps, product management, and team management.\nHe works for a company that develops products that visualize voice communication, with headquarters in Japan and global offices in Indonesia, the U.S., and the Philippines, to better and more accurately deliver large amounts of voice and video data to users and suggest better communication.",
								},
							],
							tags: [],
							start: "11:30:00",
							end: "12:00:00",
							description:
								"Harness the Raspberry Pi to create a voice-activated bot that tells you your schedule for the day, using both speech recognition and synthesis. Designed for beginners, this session will guide you through a hands-on project that brings the power of Raspberry Pi to your everyday life.\n\nThe session will cover the following topics\n\nOS Installation\nLearn how to install the operating system to get your Raspberry Pi up and running.\nInitial Setup\nPerform the initial configuration and install the necessary software to prepare your Raspberry Pi.\nMicrophone Setup\nSet up a microphone for audio input, which is essential for speech recognition.\nSpeech Recognition Engine Setup\nInstall and configure the libraries and tools needed to enable speech recognition in Python.\nSpeech Synthesis Setup:\nLearn how to install and set up the speech synthesis libraries in Python that allow your bot to speak.\nRetrieving and reading Google Calendar\nUse the Google Calendar API to retrieve your schedule and create a bot that reads it out loud.\nBy the end of this session, attendees will have learned how to create a voice-activated schedule bot with Raspberry Pi and will have gained practical skills to improve their daily routines. This session is beginner friendly and covers everything from the basics of Python and Raspberry Pi to more advanced applications.",
							streaming_link: "https://streamyard.com/watch/uskabp68fPQq",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/HE8QDG/",
						},
						{
							id: "b1842494-4bab-4c8d-a650-907f208d9c21",
							name: "Validating and monitoring the performance of your ML Applications (v2)",
							room: "Class #5 - 3B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "ninz eclarin",
									job_title: "ML Engineer",
									organisation: "Yamaha Ag Australia",
									bio: "-",
								},
							],
							tags: [],
							start: "11:30:00",
							end: "12:00:00",
							description:
								'With all the hype about applications that uses machine learning, I think there is one key aspect that developers tend to forget: "Performance check and monitoring".\n\nML and AI services have become very accessible and can be integrated into any application you can think of. But what do you do after you integrated your ML models to your application? How do you know that the output of the ML models are correct and up to standard? What are the signs that the model\'s performance is changing and how do you take action on such changes?\n\nTypically, these problems are just discussed on a theoretical and research level. But how can we carry over these techniques and apply it to our application? Not just that, how can we make it so that monitoring and performance check is as simple as writing a unit test (or not).\n\nIn this session, we will learn some simple but effective ways on model performance monitoring as well as look at some python implementation and architecture consideration. We will also check some best practices and some real life scenario on how model monitoring works.\n\nThe inspiration for this talk came from more than a year ago when my partner (software engineer) started looking into ChatGPT for her work. Almost every time, our conversation always ends with her asking "how do I know that the output of our application using chatgpt is correct?"\n\nModel validation and performance checking is a very common topic on research and in the academe. However, due to the rise of AI as a service, more and more people started encountering this problem.\n\nHaving implemented machine learning applications for more than 7 years, model validation can be quite cumbersome, especially when dealing with high traffic and variable type of datasets. But through the years, we\'ve picked up some simple but practical approach to add these features in our python applications.\n\nThe talk will focus on the following key ideas:\n\n-Why do you need model validation?\n-How do you choose the right validation metric for your ML application?\n-Implementing a simple model validation and monitoring module in python.\n-Understanding the model validation result and how this affects your ML application.\n\nThis session will require some basic understanding of machine learning but all the resource will be beginner friendly and code examples will be available for participants to try out in their free time.',
							streaming_link:
								"https://streamyard.com/watch/muGDdUfCBmXa?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/TPQXKU/",
						},
						{
							id: "83cc07bf-41bf-447f-b9e3-f0ce290bb923",
							name: "Speeding Up Transcribing with GPUs and TPUs",
							room: "Class #6 - 3C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Yuta Yanagi",
									job_title: "Data Engineer",
									organisation: "Chura Data Inc.",
									bio: "Yuta is a machine learning engineer at Churadata Inc. in Okinawa, Japan, where he has been building innovative AI solutions since Spring 2024. He is passionate about leveraging Python to explore the fascinating world of NLP and voice processing.\nCurrently pursuing his PhD at the University of Electro-Communications, Yuta's research focuses on the intersection of technology and society, specifically on the automatic detection of disinformation in social media.\n\nIn his spare time, Yuta enjoys exploring the beautiful island of Okinawa and indulging in his hobby of cosplaying as characters from his favorite Japanese video games.",
								},
							],
							tags: [],
							start: "11:30:00",
							end: "12:00:00",
							description:
								'Automatic Speech Recognition (ASR, a.k.a. speech-to-text) , also known as speech-to-text, is a valuable technology, with models like Whisper empowered by Python. Whisper is available via APIs; however, it takes a long time to process voice data. I would like to introduce several ways to speed up the Whisper model using local/remote GPUs and TPUs in Google Cloud.\n\nAutomatic Speaker Recognition (ASR) is a technology that automatically transcribes voice into text. This technology is useful in not only just make subtitles, but also write summaries. The ASR can be used via APIs provided by tech giants, but it can be time-consuming, especially during long meetings. For example, OpenAI provides the Whisper model, but the latest model is still unavailable via API. In this presentation, I will introduce several tips for speeding up ASR using the latest Whisper large-v3 model.\n\nUnfortunately, the official local model from OpenAI does not support using three or more GPUs in one process. As an alternative, I will introduce the "faster-whisper" model, an extended version of the official one. This model is empowered by CTranslate2 and is almost twice as fast as the original. Based on this, I will also provide an advanced example of accelerating transcription from multiple voice files using multiple GPUs with a multithreading (concurrent.futures) module.\n\nAdditionally, I will introduce "whisper-jax," which is available for use with TPUs. This module\'s backend is JAX, which adopts functional programming. I won\'t go into details of the paradigm in this session, but it\'s a helpful tool to reduce processing time from tens of minutes to one minute.\n\nFinally, I will compare the processing times of all these methods and highlight important points to consider when using them.\n\nMost code examples are within 10 lines, making them accessible and useful for beginners using ASR, a well-known application in machine learning empowered by Python.',
							streaming_link:
								"https://streamyard.com/watch/muGDdUfCBmXa?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/MSZQE3/",
						},
						{
							id: "60451019-502c-4dbe-81c0-29df072d9766",
							name: "Optimizing Web Presence: Building an SEO Analyzer with Flask & NLP-ID",
							room: "Class #3 - 4C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Alysia Alfi",
									job_title: null,
									organisation: null,
									bio: "a sprinter in Agile or (sometimes) in marathon",
								},
							],
							tags: [],
							start: "11:30:00",
							end: "12:00:00",
							description:
								"Ensuring that the website ranks well on search engines is crucial for visibility and success. This project will showcase a web application designed to check Google rank for specific URLs and analyze website content to extract potential keywords that can boost rankings. Utilizing Flask for the back end, Natural Language Processing (NLP) for content analysis, and Vue.js for an interactive front end, this project offers a comprehensive tool for SEO optimization.\n\nSemrush is one tool that aims to check web performance, especially in SEO, thus this project is highly influenced by the tool built with Flask, NLP-ID, and VueJS\n\nCovering Google rank checking & content analyzer, this project will help developers & SEO specialists know where their site belongs in Google, plus a content analyzer to gain potential keywords from competitors.\n\nThis project includes the following key aspects:\n\nFlask: How Flask is used to handle back-end processes, API requests, and data management.\nNLP-ID: Implementing the module to parse and analyze web content, identifying keywords that could improve SEO.\nVueJS: Creating an interactive and user-friendly front-end interface with to display the results and insights effectively.\n\nDesigned for web developers, digital marketers, SEO specialists, and anyone interested in the intersection of web development and SEO. This project will bring an understanding of how to build tools that enhance web visibility and improve Google rankings using modern web technologies.",
							streaming_link:
								"https://streamyard.com/watch/ks6wA85Qnstn?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/EQYSYJ/",
						},
						{
							id: "532f0f4c-6572-4ceb-8f6e-22f29c22cc2a",
							name: "Empower Your Business with Modern Data Architecture: Enabling BI, ML, and Data Intelligent Services",
							room: "Class #1 - 4A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Dan Chan",
									job_title: null,
									organisation: null,
									bio: "AWS Community Builder\nMongoDB Community Creator\nFinancial service (FSI)",
								},
							],
							tags: [],
							start: "11:30:00",
							end: "12:00:00",
							description:
								"This session will showcase how to enable BI and ML on a modern two-tier data architecture for a business continuity plan, improve real-time analysis for a financial service application, create a centralized BI dashboard for organizational performance forecasting, implement an automated ETL process for cross-functional collaboration, and share experiences in creating a data-intelligent service layer for rapid development.",
							streaming_link:
								"https://streamyard.com/watch/TQS2xZGwVSnx?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/QWU39A/",
						},
						{
							id: "af996f1a-8895-4e9e-af97-d9ca40fe0e1d",
							name: "The power of Python's type hints: Case studies focusing on famous libraries",
							room: "Class #2 - 4B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Rei Suyama",
									job_title: "Software Engineer",
									organisation: "Japan",
									bio: "I'm Rei Suyama, a software engineer at RevComm.\nI'm the author of 'Introduction to Python Practice' book which is in Japanese.\n\n- Twitter: [@rhoboro](https://x.com/rhoboro)\n- GitHub: [@rhoboro](https://github.com/rhoboro)\n- Blog: https://www.rhoboro.com/\n- My Book(written in Japanese): https://a.co/d/j23Hqam",
								},
							],
							tags: [],
							start: "13:00:00",
							end: "13:30:00",
							description:
								"In recent years, Python has been actively enhanced with type hints, with useful features being added with each major update.\nIn addition, a number of libraries and tools that use type hints have been increased and are popular in the community.\n\nOften when people think of the use of 'typing' in programming languages, the first thing that comes to mind is static analysis to detect type inconsistencies and reduce bugs or run-time errors.\nHowever, the Python ecosystem uses type hints to flesh out various ideas.\nConcrete examples include the following\n\nFastAPI\nAutomatic generation of API documentation　\nDependency Injection\nPydantic\nData validation\nSQLAlchemy 2.0\nDetermining data types or constraints in databases\nThis session will show how these libraries implement the ideas.\n\nI believe that type hints in Python still has a lot of potential.\nThrough this session, you will be able to use type hints more conveniently and flesh out new ideas by yourself.",
							streaming_link:
								"https://streamyard.com/watch/3gbtWi3nm5KS?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/RH7GPM/",
						},
						{
							id: "645815b2-07c1-41ea-9625-3913a7cb6e61",
							name: "Transforming Academic Counseling: A Python and AI Chatbot for University Major Selection",
							room: "Class #3 - 4C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Mutiara Auliya Khadija",
									job_title: null,
									organisation: null,
									bio: "Researcher at Sebelas Maret University",
								},
							],
							tags: [],
							start: "13:00:00",
							end: "13:30:00",
							description:
								"The process of selecting a university major is a critical decision for new students, often accompanied by uncertainty and confusion. Traditional academic counseling services, while valuable, may not always be accessible or sufficient to address the diverse needs of every student. This research paper presents the development and implementation of a Python-based chatbot, enhanced with AI techniques, designed to provide personalized major recommendations to new students.\n\nThe chatbot utilizes a combination of natural language processing (NLP) and machine learning algorithms to analyze students' interests, academic strengths, and career aspirations, offering tailored suggestions for suitable majors. The deep learning model is trained on a comprehensive dataset comprising student profiles, historical academic performance, and successful major outcomes, ensuring accurate and relevant recommendations.\n\nBy integrating this intelligent chatbot into the academic counseling framework, we aim to augment the decision-making process for new students, offering them valuable references and insights into potential majors. This research underscores the potential of leveraging advanced AI technologies in educational support systems using Python, paving the way for more accessible and personalized academic advising solutions.",
							streaming_link:
								"https://streamyard.com/watch/rndH4NHzx8wj?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/D38YWC/",
						},
						{
							id: "747c097c-572b-4890-91c2-75c30c034213",
							name: "Streamlining Full-Stack Development: Building OpenAPI-Powered APIs with FastAPI and Integrating with Next.js Using TypeScript and React Query",
							room: "Class #1 - 4A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Ryan Elian",
									job_title: null,
									organisation: null,
									bio: "-",
								},
							],
							tags: [],
							start: "13:00:00",
							end: "13:30:00",
							description:
								"In this talk, we will explore how to streamline full-stack development for the entire team by building OpenAPI-powered APIs with FastAPI and integrating them with Next.js using TypeScript and React Query. We’ll discuss how FastAPI’s automatic OpenAPI documentation fosters clearer communication between backend and frontend developers, reducing misalignment and speeding up collaboration. On the frontend, tools like Next.js, OpenApi-TypeScript, and React Query not only enhance the developer experience with better type safety and state management, but also create a smoother handoff between teams. By aligning backend and frontend workflows, teams can work more efficiently, minimize errors, and improve overall project cohesion.",
							streaming_link:
								"https://streamyard.com/watch/VQpyrkUbemAq?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/KVQSNM/",
						},
						{
							id: "76dba5cb-009c-4743-a9a1-ebbd47312b3f",
							name: "Seeing Faces Behind the Darkness: How Several Low-Light Image Feature Extraction Algorithms Work",
							room: "Class #4 - 3A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Silvia Larasatul M",
									job_title: "Software Engineer",
									organisation: "-",
									bio: "I am a computer vision enthusiast and a software developer. I was graduated with a bachelor of engineering majoring Information Technology and delve into the field of artificial intelligence, especially computer vision, since 2022.",
								},
							],
							tags: [],
							start: "13:00:00",
							end: "13:30:00",
							description:
								"Facial recognition in low light conditions is a big challenge for traditional facial recognition systems. In this talk, the speaker will delve into how each of various dark image feature extraction algorithms (HOG, LBP, Fisherface, DeepID, etc), implemented using Python, can significantly impact facial recognition performance in low lighting condition based on speaker's research.\n\nThis talk will be useful for students, researchers, developers, and practitioners who are interested in facial recognition and computer vision.\n\nFacial recognition in low light conditions is a big challenge for traditional facial recognition systems. In this talk, the speaker will delve into how each of various dark image feature extraction algorithms (HOG, LBP, Fisherface, DeepID, etc), implemented using Python, can significantly impact facial recognition performance in low lighting condition based on speaker's research.\n\nSome important points that will be discussed:\n- The challenges of facial recognition in low light conditions and how current solutions.\n- Detail explanation about how several feature extraction algorithms work.\n- Differences in several feature extraction algorithms.\n- Selecting the most effective feature extraction algorithm for low-light facial recognition.",
							streaming_link:
								"https://streamyard.com/watch/v5xzksv9JcvZ?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/FPAJCV/",
						},
						{
							id: "e0c06ff6-d076-4967-975d-2ccce6f456d9",
							name: "Optimizing Python Performance: Strategies for Infrastructure Automation and Beyond",
							room: "Class #6 - 3C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Irwan Shofwan",
									job_title: "Senior Cloud Platform Engineer",
									organisation: "Goto Company",
									bio: "As an engineer, I thrive on unraveling complex systems and solving technical challenges. Beyond my professional pursuits, I have a passion for cooking and exploring diverse cuisines.",
								},
								{
									name: "Didi Yudha Perwira",
									job_title: "Sr software engineer",
									organisation: "GoTo financial",
									bio: "https://medium.com/@didiyudhaperwira",
								},
							],
							tags: [],
							start: "13:00:00",
							end: "13:30:00",
							description:
								"Enhancing the performance of Python scripts is a critical challenge for developers striving to optimize efficiency and reduce execution time. This presentation will delve into various methodologies for improving Python script performance, including threading, multiprocessing, and application refactoring.\n\nPython's Global Interpreter Lock (GIL) presents significant challenges in achieving true parallelism, as it permits only one thread to execute at a time, even in a multi-threaded context. We will discuss the implications of the GIL on threading and highlight scenarios where No GIL implementations or workarounds can be advantageous.\n\nAlthough threading and multiprocessing enable parallel execution, they do not inherently ensure faster runtimes. Threading can be effective for I/O-bound tasks, whereas multiprocessing is more suitable for CPU-bound operations. However, both approaches introduce complexity and potential overhead that can negate performance gains.\n\nConversely, refactoring the application can lead to substantial performance improvements. By optimizing algorithms, reducing complexity, and leveraging efficient data structures, developers can achieve significant runtime reductions. This presentation will provide practical examples and case studies illustrating how refactoring can be a more effective strategy for performance enhancement compared to merely adding parallelism.\n\nAdditionally, this talk will outline our journey to enhance our infrastructure automation, employing several approaches and comparing each to achieve notable improvements. By implementing these strategies, we accomplished a 90% reduction in running time and met our SLA, thereby enhancing productivity. This presentation will offer practical examples and an in-depth exploration of approaches that may be applicable to other use cases as well.",
							streaming_link:
								"https://streamyard.com/watch/WxCxgVJXu9Ms?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/XHJD7Z/",
						},
						{
							id: "ea86e8cf-d505-47b3-8deb-1c3c9c184eeb",
							name: "Code Sprint Introduction",
							room: "Class #5 - 3B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "PyCon Organizer",
									job_title: null,
									organisation: null,
									bio: "-",
								},
							],
							tags: [],
							start: "13:00:00",
							end: "13:30:00",
							description:
								"We have a Code Sprint introduction today at #PyConAPAC 2024, starting at 1 PM!\n\nSessions led by:\n- CPython session led by Anthony Shaw\n- FreeCAD session led by Ajinkya Dahale\n- QGIS session led by Ismail Sunni\n\nLocation: Amphitheater (2nd floor, in front of the piano).\n\nAfter the session, join fellow Pythonistas for networking or dive into the code sprint at the Adaro Internet Center on the 2nd floor!",
							streaming_link: null,
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/ND7RJJ/",
						},
						{
							id: "52de2dbd-cf3c-4b0f-b32b-4ff4b5b380c8",
							name: "Database replication with Django and Postgres",
							room: "Class #1 - 4A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Marcin Gębala",
									job_title: "Principal Developer",
									organisation: "Saleor Commerce",
									bio: "I'm a Principal Developer at Saleor Commerce (https://github.com/saleor/saleor), where I work on the core GraphQL API of the largest open-source e-commerce platform written in Python. In my free time, I enjoy cycling, making music, and traveling. I'm based in Wrocław, Poland.",
								},
							],
							tags: [],
							start: "13:40:00",
							end: "13:55:00",
							description:
								"Database replication is a concept of storing the same data in multiple databases to improve fault tolerance, data accessibility and performance. In this talk, we will discuss why and when database replication is useful, along with practical examples and best practices to use in the codebase when working with separate writer and reader databases.\n\nDatabase replication is a concept of storing the same data in multiple databases, which is useful in applications with high traffic, to maintain high availability and performance. Once the database becomes a bottleneck, a common solution is to create a setup with a separate database for write operations (a writer) and one or more databases for read operations (readers, replicas).\n\nIn this talk, we will look into a setup of a web application based on Django and Postgres, that is configured to use two databases - a writer and a reader. We will look at different aspects of this solution:\n\ntheory of how replication works in different databases\nhow to configure multiple databases with Django and Postgres\npractical examples of patterns to use in code to handle reading and writing using separate databases\nchallenges and edge cases that occur with this setup, such as handling the replication lag.\nWe will use an example web app to show all the concepts and look at real-life examples based on a large production app written in Django.\n\nThe structure of the talk is as follows:\n\n1. Introduction to database replication - how it works, when and why it is useful.\n2. Database replication in practice with Django and Postgres - configuration and best practices to use in code.\n3. Challenges and edge cases and how to deal with them.",
							streaming_link:
								"https://streamyard.com/watch/69mWgzYNCGjc?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/9ADYK8/",
						},
						{
							id: "dc5dccc7-8a1f-4851-9b9f-7b209db12d2c",
							name: "Djangonaut Space: A Fun Way to Be Familiar with Open Source",
							room: "Class #6 - 3C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Shafiya Adzhani",
									job_title: "Software Engineer",
									organisation: "GoTo Financial",
									bio: "Recently graduated software developer with 6 years of learning Python. A beginner Django contributor who loves web development and has a keen interest in databases. Proudly participated in Djangonaut Space as the only Indonesian in the cohort (hope to see more!). Aspires to see more APAC community members participate in open source.",
								},
							],
							tags: [],
							start: "13:40:00",
							end: "13:55:00",
							description:
								'For beginners, contributing to open source can seem like a daunting mystery. "Which project should I contribute to? Is contributing limited to coding, or can I design as well? If I decide to code, which part should I fix? How can I replicate bugs in my environment?" These questions can be overwhelming. But worry not, Django is a perfect starting point for familiarizing ourselves with open source. If you know Python and web development with HTML and JavaScript, you\'re already set! Many tutorials on how to contribute to Django are available online.\n\nWhat if we prefer to ask someone who knows better? In that case, good news! Djangonaut Space is a fun place for everyone to explore open source together in a group. Participants will work in groups based on their interests. Are you interested in the Django Core codebase, or do you prefer working with third-party packages? Not only will we deepen our technical skills, but we will also learn from experienced Django leaders on how to sustainably work with open source. We will share personal experiences of navigating the Django codebase and explore how Djangonaut Space can enhance this journey.\n\nThis talk will be divided into several sections. First, we will discuss the common challenges faced by beginner developers wanting to contribute to open source. Since we are familiar with web development and Python, we will explore why Django is an excellent project to start with. We will provide examples of how Django accommodates early contributors in its codebase.\n\nNext, we will introduce Djangonaut Space, an initiative from the Django community that encourages group collaboration. We will explain what participants typically do during Djangonaut Space sessions and what they can expect throughout the program.\n\nI will also share my personal journey with Djangonaut Space, including the registration process and my activities during the program. We will discuss the experience of contributing to a large Django codebase. The experience also can be valuable for anyone working with large open source projects. Moreover, we will highlight opportunities to work with the open source community beyond just contributing code.\n\nBy the end of this talk, attendees will have a clearer understanding of how to begin contributing to open source with example of Django, the supportive environment provided by Djangonaut Space, and other opportunities for participating in the open source community.',
							streaming_link:
								"https://streamyard.com/watch/vXARiKxn2ebb?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/PBVTNA/",
						},
						{
							id: "4c34d0e4-fa6f-44ed-828c-a0fa8e1f8404",
							name: "Text Analytics with Python on Medium Articles",
							room: "Class #3 - 4C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Nur Azmi Prasetyo",
									job_title: null,
									organisation: null,
									bio: "Data Professionals",
								},
							],
							tags: [],
							start: "13:40:00",
							end: "13:55:00",
							description:
								"This presentation will delve into the practical applications of Python in text analytics, focusing on data sourced from Medium articles. The talk will cover the following key areas:\n\nData Collection: Demonstrating web scraping techniques with BeautifulSoup and requests to gather Medium articles' data, including titles, content, and metadata.\n\nData Preprocessing: Using Pandas, nltk, and spaCy to clean and preprocess text data. This includes tokenization, stop words removal, and lemmatization.\n\nExploratory Data Analysis (EDA): Conducting an initial analysis to understand the dataset, including word frequency distribution and word clouds using Matplotlib and Seaborn.\n\nSentiment Analysis: Applying TextBlob and VADER for sentiment scoring of articles, visualizing sentiment trends over time, and comparing sentiments across different topics.\n\nTopic Modeling: Utilizing Gensim and Latent Dirichlet Allocation (LDA) to uncover underlying topics in the text data, with visualizations using pyLDAvis.\n\nNamed Entity Recognition (NER): Identifying and categorizing entities with spaCy, extracting and visualizing entities mentioned in articles.\n\nVisualization: Creating informative visualizations using Plotly to present findings effectively, including word clouds, sentiment trends, and topic distributions.\n\nCase Study: Analyzing a selection of Medium articles to showcase the application of these techniques and present key findings such as common themes, sentiment trends, and notable entities.\n\nThe presentation aims to equip attendees with practical knowledge and tools to perform text analytics, making it valuable for content creators, data scientists, and Python enthusiasts alike",
							streaming_link:
								"https://streamyard.com/watch/hfuuUTRv3Q6w?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/VDGLRC/",
						},
						{
							id: "f3b812f0-bee0-4baa-aadd-b677b1ff567a",
							name: "Buy / short a dystopyc future - LLM agents and vector databases for portfolio management",
							room: "Class #5 - 3B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Carlos Vecina Tebar",
									job_title: null,
									organisation: null,
									bio: "Data Professionals",
								},
								{
									name: "Ana Belen Barbero Castejon",
									job_title: null,
									organisation: null,
									bio: "-",
								},
							],
							tags: [],
							start: "13:40:00",
							end: "13:55:00",
							description:
								"Which companies will potentially win in a dystopian future? Let an agentic framework imagine it and try to find out. Buy or short, it's up to you ;)\n\nOur proposed framework consist on:\n- Data ingestion: News, financial statements and OHLC information ingestion with data pipelines (Mage), embeddings and vector database (Weaviate).\n- Merging previous knowledge with new data: Exploration on RAG system to feed the info to the LLM and keep the model updated.\n- Create the investment crew and giving them tools LLM agents mimicking different investment roles (LangGraph) + financial toolset combination in order to make informed decisions.\n\nWe will try to distill for you our learnings while building it and keep the buzzwords apart... as much as possible.",
							streaming_link:
								"https://streamyard.com/watch/9hCp9B3EErnr?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/P9ZF98/",
						},
						{
							id: "dd38caa6-6a2b-4f4b-879e-e020ffe0d356",
							name: "Finding the Most Profitable Investment in APAC Using Python",
							room: "Class #4 - 3A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Jehuda Rajasa",
									job_title: "Product Engineer",
									organisation: "Zero One Group",
									bio: "-",
								},
							],
							tags: [],
							start: "13:40:00",
							end: "13:55:00",
							description:
								"In an era where data drives investment decisions, harnessing the power of Python to analyze historical financial data can provide valuable insights into the most profitable investment opportunities in the Asia-Pacific (APAC) region. This talk will explore how Python's versatile libraries and tools can be employed to gather, process, and analyze financial data from the past decade, highlighting the top-performing indices and instruments. Whether you are an experienced investor, a data scientist, or a Python enthusiast, join us to discover actionable insights and practical techniques for making informed investment decisions based on historical performance in one of the world's most dynamic markets.\n\nThe Asia-Pacific (APAC) region is home to some of the world's fastest-growing economies, presenting lucrative opportunities for investors. However, identifying the most profitable investments requires more than just intuition—it demands a data-driven approach. In this session, we will dive into the world of financial analysis using Python, demonstrating how to leverage its powerful libraries to navigate the complex landscape of APAC investments based on historical data.\n\nKey takeaways from this talk include:\n\nData Acquisition: Learn how to collect and aggregate historical financial data using yfinance.\nData Processing and Cleaning: Discover techniques for cleaning and preprocessing raw data to ensure accuracy and reliability, using libraries such as Pandas and NumPy.\nFinancial Analysis: Understand how to perform fundamental and technical analysis on historical data using Python tools. We will cover popular libraries like SciPy and statsmodels to evaluate financial metrics and indicators.\nVisualization: Gain insights into visualizing data with Plotly, helping to identify trends and patterns in past performances of APAC country indices and their top-performing instruments.\nCase Studies: Explore real-world examples of how Python-driven analysis has been used to identify the top-performing indices and instruments in the APAC region over the past 10 years, providing valuable lessons for future investment decisions.\nBy the end of this session, attendees will be equipped with the knowledge and tools to leverage Python for analyzing historical financial data, making informed, data-backed investment decisions. This talk is ideal for investors, financial analysts, data scientists, and Python programmers looking to apply their skills to the world of finance.",
							streaming_link:
								"https://streamyard.com/watch/KFbCvHMhKpA2?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/WGXDSE/",
						},
						{
							id: "2662eac6-09b4-47f1-80f5-559b638682fd",
							name: "The Quest for Hidden Knowledge: Journey to the Land of Lost Files",
							room: "Class #5 - 3B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Raka Prakoso",
									job_title: "Head of Data Science",
									organisation: "Sinarmas Land",
									bio: "Hi! I'm Raka. A Jakarta based Academic/Curriculum Director and Software Engineer for over 5 years. Former Academic/Curriculum Director at Hacktivate Jakarta, currently working as Head of Data Scientist at Sinarmas Land.",
								},
							],
							tags: [],
							start: "14:00:00",
							end: "14:30:00",
							description:
								"Embark on a journey into the realm of digital discovery with our tale of building an internal search engine at Sinarmas Land. Join us as we unveil how we tackled the challenge of unlocking hidden knowledge buried within PDFs, Images documents and Relational tables. Using a blend of modern technologies and ingenuity, we crafted a solution that revolutionizes how employees access critical information. This session will delve into the technical intricacies, lessons learned, and the impact of our quest for hidden knowledge.\n\nIn this session, we will narrate the story behind the creation of an innovative internal search engine tailored for Sinarmas Land. Key topics include:\n\nProject Genesis: Introduction to the need for an internal search engine to enhance accessibility to SOPs, promotion flyers, research documents, and customer data.\nTechnological Odyssey: Exploration of the technologies employed, including Python FastAPI for backend, Azure OpenAI for natural language understanding, and React for building a responsive frontend, and all Azure Infrastructure used in this project.\nJourney to Implementation: Step-by-step journey through designing the system architecture, integrating diverse data sources, and optimizing search algorithms for efficiency.",
							streaming_link:
								"https://streamyard.com/watch/XRejfWBAdKqR?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/HNYGUM/",
						},
						{
							id: "ca54435d-7362-4767-8452-7174de03bae7",
							name: "Profile, debug and monitor my PySpark workloads",
							room: "Class #4 - 3A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "HYUKJIN KWON",
									job_title: null,
									organisation: null,
									bio: "Hyukjin is a Databricks software engineer as the tech-lead in OSS PySpark team, ASF member, Apache Spark PMC member and committer, working on many different areas in Apache Spark such as PySpark, Spark SQL, SparkR, infrastructure, etc. He is the top contributor in Apache Spark, and leads efforts such as Project Zen, Pandas API on Spark, and Python Spark Connect.",
								},
							],
							tags: [],
							start: "14:00:00",
							end: "14:30:00",
							description:
								"PySpark is widely used for data analysis in distributed computing environments, offering not only the standard DataFrame API but also Python User Defined Functions (UDFs), Python Data Sources, Python UDTFs, and more. However, debugging and profiling applications in such environments can be challenging. For example, you cannot simply add a step and inspect it in your IDE.\n\nIn this presentation, I will explore techniques for debugging and profiling PySpark applications using existing tools like cProfile, a standard Python profiler. Additionally, I'll share various tips and best practices for effectively monitoring and debugging PySpark applications.",
							streaming_link:
								"https://streamyard.com/watch/8QHYBZQyRHt9?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/MEQEAP/",
						},
						{
							id: "1b4130ab-1233-4d26-b292-afff32936c24",
							name: "Don't break your library users",
							room: "Class #6 - 3C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Dima Tisnek",
									job_title: "Senior Software Engineer",
									organisation: "Canonical",
									bio: "Currently at Canonical, specialises in backend development, system architecture, and integrating open-source technologies. Linux old-timer, occasional CPython contributor. An active participant in the Python community: using, testing, discovering limits of open-source projects. Recently more interested in what makes software great and what makes the world tick.",
								},
							],
							tags: [],
							start: "14:00:00",
							end: "14:30:00",
							description:
								"PyPI is full of amazing libraries. How did they do it? What does it take to keep a library relevant? What is the art of compatibility? Who are the users and where to find them?\n\nA library is ideally designed to be both useful and dependable for its users.\n\ndesign choices and user experience\nthe level of Python proficiency to expect\nthree distinct common user groups\ntesting in the context of user applications\nevolution and thoughtful API design\nreal-world breakage examples\nbenefits and drawbacks of roadmaps\npros and cons of supporting old versions\nThe talk is based on practical experience maintaining ops, the operator framework.\n\nCanonical's Juju streamlines cloud management by automating deployments through Charms, powered by ops. Unlike AWS, Juju offers a flexible, open-source, host-your-own alternative without vendor lock-in. Contrasted with Ansible, Juju is higher-level, declarative, and aimed at reproducible deployments. Charms, written in Python, are opinionated and shift the focus from packaging and app lifecycle to the interfaces that facilitate the integration of applications.",
							streaming_link:
								"https://streamyard.com/watch/emjKRKMhvKmZ?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/SFZRBY/",
						},
						{
							id: "7a9d633d-6303-4591-9041-2c07a618b94a",
							name: "Classifying Transaction Purpose with Graph Neural Networks",
							room: "Class #1 - 4A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Rimba Erlangga",
									job_title: "Data Scientist",
									organisation: "Flip",
									bio: "Rimba Erlangga is a Data Scientist at Flip, a leading money transfer company in Indonesia. With 2+ years of experience in data analytics, he specializes in analyzing lending and marketing data, as well as building and designing machine learning systems. He is also currently pursuing his master's degree in Artificial Intelligence at Universitas Gadjah Mada.",
								},
							],
							tags: [],
							start: "14:00:00",
							end: "14:30:00",
							description:
								"Discover how to harness machine learning to automatically tag personal transaction purposes, eliminating the need for manual categorization. This talk will explore the workaround by utilizing an AI architecture namely Graph Neural Networks, to model the interactions between senders and recipients, as well as other information such as the transfer amount and the transfer notes.\n\nThis talk will cover topic about how to do this with machine learning approach. Money transfers data form a mathematical structure called graph, containing the interactions from the senders to the recipients. We use the DuckDB library🦆 to handle the big volume of the data, as well as NetworkX to work with graph data. Finally, we model the interactions with Graph Neural Networks architecture in PyTorch🔥 to infer the purpose of the transaction.\n\nThe talk format will roughly be:\n- 👋🏼 1-2 mins: Introduction\n- 💡 2-3 mins: Problem motivation\n- 📊 7-8 mins: Datasets - what differentiates the purpose of one transaction from another?\n- 🔍 7-8 mins: Workaround and brief intro to Graph Neural Networks\n- 🚀 6-8 mins: Model performance\n- 🗣️ 3-5 mins: Q&A / awkward silence\n\nThis talk is aimed at:\n- 👤 Intermediate audiences, specifically data scientists and machine learning engineers or researchers.\n- 💪🏼 Beginners or those keenly interested are welcome as well, with at least a basic knowledge of machine learning and deep learning",
							streaming_link:
								"https://streamyard.com/watch/GAnTgcdmKcU2?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/XZQ9KL/",
						},
						{
							id: "490bc1bb-1d4a-4f03-9d10-a28c5d716f27",
							name: "Build Streaming Processing Pipeline with Apache Beam",
							room: "Class #3 - 4C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Bimantara Hanumpraja",
									job_title: "Machine Learning Engineer",
									organisation: "Fazz",
									bio: "Hi, I'm Bima, a passionate explorer of all things related to data. My journey in the data field began in 2020 when I started working as a Data Engineer. Over the years, my career has evolved into various roles, including Data Scientist, Data Analyst, and Machine Learning Engineer. In 2021, I transitioned into the roles of Data Scientist and Data Analyst, where I honed my skills in data analysis, predictive modeling, and deriving actionable insights from complex datasets. My experience in these roles allowed me to understand the full lifecycle of data, from collection and processing to analysis and visualization. By 2022, my focus shifted to Machine Learning Engineering, where I developed and deployed machine learning models, ensuring they were scalable and efficient. This role further improve my understanding of AI and its practical applications in solving real-world problems. Currently, I am working as a Data Infrastructure Engineer, where I am responsible for building and maintaining robust data systems. My role involves ensuring the integrity, availability, and security of data, while also optimizing the infrastructure for performance and scalability. I love building complete systems for data and AI, and I'm always eager to explore new technologies and methodologies in the field. My diverse experience across different roles in the data domain has equipped me with a comprehensive understanding of the challenges and opportunities in creating and managing data-driven solutions.",
								},
							],
							tags: [],
							start: "14:00:00",
							end: "14:30:00",
							description:
								"Linkedin's real-time infrastructure can process more than 4 trillion events daily with 3000 pipelines that deployed across data center to serve over 950 million users worldwide. To achieve this, they are using Apache Beam for building streaming pipeline. Good news, Apache Beam has an SDK in Python.\n\nIn this talk, you will learn how to build a simple streaming pipeline using Python and run it on your local machine. We will then explore how Apache Beam can handle both batch and streaming data. You will gain a deeper understanding of Beam’s core components, windowing strategies, how to perform joins in a streaming context and its application.",
							streaming_link:
								"https://streamyard.com/watch/PdUataqTqA33?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/EMWXWK/",
						},
						{
							id: "4fa993c6-e3d4-44ce-ab82-2d7e8807587b",
							name: "Mastering Investment Risk Analysis with Multi-Agent AI Systems",
							room: "Class #2 - 4B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Kalyan Prasad",
									job_title: null,
									organisation: null,
									bio: "Hello, this is Kalyan from India. I started my career as a newspaper delivery boy, and through hard work and determination, I evolved into a self-taught data scientist and analytics manager. And, I use to lead a talented data science and analytics team in my previous company. Currently I am a freelance Data & AI scientist!\nI'm deeply passionate about open-source communities and actively contribute to them. Over time, I've established myself as a respected global speaker and influential community leader, delivering talks at prestigious conferences and educational institutions such as PyData Global, Data Science Global Summit 2022, JupyterCon, PyCon JP, PyCon India, Devfest Hyderabad, PyCon APAC, PyCon Hong Kong, PyCon ZA, Pyjamas, Conf42, Developer Conference Telangana 2021, BelPy & KLS Gogte Institute of Technology, Belagavi, Karnataka, India. \nI also worked as Reviewer and Mentor for reputed conferences & hackathons including EuroPython, SciPy, PyData, PyData Seattle, JupyterCon, PyCon US, PyCon India, PyConfHyderabad, and many others. (At the moment, assisting the EuroPython 2024 Proposal Mentorship program.\nKalyan is also contributing to various open-source communities. He enjoys being involved with these communities and helping them grow. Currently I am associated with the following organizations below:\nNUMFOCUS - Small Development Grants Review Committee\nPyCon India – Conference Co-chair\nPyConf Hyderabad – Conference Co-chair\nKaggle X Bipoc Mentorship - Mentor\nPyData Global Impact Mentoring Program - Mentor\nHyderabad Python Users Group – Core Member/ Meetups Organizer\nHumans for AI – Program Manager for AI learning Community",
								},
							],
							tags: [],
							start: "14:00:00",
							end: "14:30:00",
							description:
								"We discover how artificial intelligence revolutionizes investment risk analysis with a focus on multi-agent systems. Learn to deploy specialized agents for Data Analysts, Trading Strategy Developers, Trade Advisors, and Risk Advisors to monitor market data, refine trading strategies, optimize trade executions, and evaluate risks.\n\nIn this session, participants will discover the foundational principles of setting up a multi-agent framework for investment risk analysis using AI. From developing and refining trading strategies to optimizing trade executions and assessing risks. And participants will gain practical insights into leveraging Python's capabilities in financial decision-making. Trust me this will be an interesting real time use case and I believe participants will definitely love it\n\nOutline:\nIntroduction to Multi-Agent AI Systems\nOverview of Python's versatility and popularity in AI development.\nKey Components of the Multi-Agent System\nBuilding and Configuring AI Agents using Python\nReal time use case in action\nQ&A",
							streaming_link:
								"https://streamyard.com/watch/bEXEQXartats?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/GLNYBV/",
						},
						{
							id: "9344e698-ebe0-467f-98fe-b27695345875",
							name: "FastAPI Deconstructed: Anatomy of a Modern ASGI Framework",
							room: "Class #1 - 4A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Rafiqul Hasan",
									job_title: "Lead Engineer",
									organisation: "bKash Limited",
									bio: "Seasoned software engineer with 10 years of experience delivering efficient, scalable, and maintainable code for large-scale projects.",
								},
							],
							tags: [],
							start: "15:00:00",
							end: "15:30:00",
							description:
								"FastAPI has taken the Python web development world by storm, offering a powerful and developer friendly approach to building APIs. This talk dives deep into the inner workings of FastAPI, deconstructing its architecture and exploring the key components that make it tick. As an early adopter, I'll share my experience and insights, providing a clear understanding of how FastAPI leverages the ASGI standard for high-performance web applications. This session will not only benefit those new to FastAPI, but also experienced developers seeking a deeper understanding of its inner workings and the advantages of the ASGI paradigm.\n\nFastAPI has become a popular choice for building modern web APIs due to its focus on developer experience and performance. This talk goes beyond the \"how-to\" and delves into the \"why\" behind FastAPI's success. We'll explore:\n- The core components of FastAPI and their functionalities\n- What is ASGI?\n- How FastAPI harnesses the power of ASGI for asynchronous request handling\n- The advantages of ASGI in crafting scalable and high-performance web applications\n- Some tips from the experience and best practices for building APIs with FastAPI\n\nWhether you're a seasoned Python developer or just starting with web frameworks, this talk will equip you with a thorough understanding of FastAPI and its underlying ASGI foundation. You'll gain valuable insights and practical knowledge to take your API development skills to the next level.",
							streaming_link:
								"https://streamyard.com/watch/SHZRX2phGk6f?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/BMLXEZ/",
						},
						{
							id: "93901868-8e46-4766-b65d-570e7aaa3aee",
							name: "Python in the browser: my journey towards enhancing the Scientific Python ecosystem's interoperability with Pyodide",
							room: "Class #2 - 4B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Agriya Khetarpal",
									job_title: "Software Engineer",
									organisation: "Quansight, LLC",
									bio: "Agriya Khetarpal is a software engineer at Quansight Labs, where he works on the packaging and distribution of fundamental open-source software in the PyData stack, and on approaches to WASM-powered interactive documentation that are primarily built to serve the purpose of accessibility and education for the Python programming language.\n\nHe is interested in Python packaging, scientific computing, numerical software, compilers and toolchains, and many more topics.\n\nAgriya recently graduated from the University of Delhi with a bachelor's degree, majoring in computer science and mathematics.",
								},
							],
							tags: [],
							start: "15:00:00",
							end: "15:30:00",
							description:
								"The Python programming language in recent years has gained advancements not only in terms of speed but also with its coverage of platforms and architectures that it supports, such as the upcoming iOS (PEP 730) and Android (PEP 738) ABIs, which will be a boon for its popularity and help expand it to a large variety of users. Similarly, the advent of WebAssembly (through the Emscripten toolchain) in the last decade has served a purpose rarely met by any other implementation of low-level code: being able to provide a way to run programs written in multiple languages at near-native speed by reworking higher-level instructions and their intermediate representations to near-assembly ones, that can run inside conventional browsers such as Google Chrome (and other Chromium-based browsers), Safari, and Firefox; across devices.\n\nHere, the web browser has 1. access to the CPU of the host machine and therefore does not hit any major speed or connectivity constraints, and 2. the inherent security models for web browsers and sophisticated sandboxing means that security constraints are seldom a problem.\n\nThis talk shall describe Python in WebAssembly through its most popular implementation (Pyodide), and about how I am working with the Scientific Python and PyData ecosystems for scientific computing, artificial intelligence, data science, and more to improve interoperability with Pyodide – and lastly, it will discuss through an interactive yet informational exchange coupled with pragmatic considerations for this Python distribution in specific in terms of interactive documentation and packaging insights, and provide a precursor on how the Scientific Python ecosystem is expected to change in the coming years with further advancements in this area.",
							streaming_link:
								"https://streamyard.com/watch/wpuWrZzWTQDM?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/E7XTJF/",
						},
						{
							id: "3aab055c-aad3-42c9-9fe2-f776045be0bf",
							name: "[UNU] From Big Data to Big Learning: A Data-Centric Approach from Public Policy to EdTech",
							room: "Class #3 - 4C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Ujang Fahmi",
									job_title: "Lead of Product and Engineering",
									organisation: "UNU Yogyakarta",
									bio: "Lead Product and Engineering, Digital Transformation Team UNU Yogyakarta",
								},
							],
							tags: [],
							start: "15:00:00",
							end: "15:30:00",
							description: "Sesi kampus UNU",
							streaming_link:
								"https://streamyard.com/watch/KmsA8GrxygVG?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/TGBKLT/",
						},
						{
							id: "d6ac42f7-84d7-4f9d-b36f-f925c0ef8cad",
							name: "Building Agentic Workflows for Planning and Reasoning with LLMs",
							room: "Class #4 - 3A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Tarun Jain",
									job_title: "Data Scientist",
									organisation: "AI Planet",
									bio: "Tarun Jain is a Data Scientist at [AI Planet](https://aiplanet.com), a Belgium based AI Startup. He is also a renowned speaker and recognised as [Google Developer Expert in AI/ML](https://developers.google.com/profile/u/tarunjain). Furthermore, he has contributed to various Open Source projects and is currently part of [Google Summer of Code 2024 at RedHenLab](https://summerofcode.withgoogle.com/programs/2024/projects/8D9AhF8O). \n\nHe is also a content creator at [AI with Tarun](https://www.youtube.com/@aiwithtarun) Youtube channel.",
								},
							],
							tags: [],
							start: "15:00:00",
							end: "15:30:00",
							description:
								"AI Agentic workflows will drive massive AI progress this year. This is what Professor Andrew Ng said about the rise of agents. With the growing popularity of large language models, Agents are what everyone is talking about. In simple terms, Agents can be defined as LLMs with the ability to self-reason and plan, just like humans. In my talk, I will focus on how to build an Autonomous Agentic workflow and the components required. Additionally, I will cover the concepts of planning and reasoning Agentic prompting such as REACT, LATS and so on to motivate the audience to stay updated with the Agentic world.\n\nProblem Statment\nLarge Language Models (LLMs) like GPT-4 have several limitations that hinder their full potential. They often struggle with maintaining contextual understanding over extended conversations, leading to disjointed or repetitive interactions. Additionally, LLMs can lack accuracy, fail to provide real-time information, self-reasoning to decompose while planning the task. This is where Agents comes.\n\nUnlike traditional LLMs, AI agents are designed to self-reason and plan, mimicking human cognitive processes. They can interact with their environment, make decisions, and take actions autonomously. This capability enables them to overcome some of the contextual and reasoning challenges that LLMs face, making them more suitable for complex, dynamic tasks.\n\nMy talk will cover:\nHow a simple execution of task is formed by humans?\nAgentic Workflow and the major components required: This includes: Task, Memory, Tools, Agents, LLM and so on.\nPlanning and Reasoning: Under this I will cover Chain of thoughts, REACT, LATS prompt techniques, that is used to build Agentic workflow.\nConclusion with useful reference papers",
							streaming_link:
								"https://streamyard.com/watch/RDVjQEq6VwWy?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/Q9LSTM/",
						},
						{
							id: "0dd6adf1-e7f7-4922-b147-13bd79e2f791",
							name: "How to safely migrate from pandas to Polars",
							room: "Class #5 - 3B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Cheuk Ting Ho",
									job_title: null,
									organisation: null,
									bio: "After having a career in Data Scientist and Developer Relations, Cheuk dedicated her work to the open-source community and founded CMD Limes, a Python consultants cooperation. She has also co-founded Humble Data, a beginner Python workshop that has been happening around the world. She has served the EuroPython Society board for two years and is now a fellow and director of the Python Software Foundation.",
								},
							],
							tags: [],
							start: "15:00:00",
							end: "15:30:00",
							description:
								"Polars is popular these days. The code looks similar to pandas however they are different libraries. To know how to efficiently use Polars, we need to dive deeper into how these libraries are different. In this talk, we will do that and provide tips to migrate from pandas to Polars.\n\nDespite the similarity of the Python API, Polars are written in Rust and have a different mechanism at their backend. Most users praise the robustness of using RAM and multi-threading of Polars over pandas. To make good use of them, we cannot write our code just like we do with pandas. Also, since the backend of Polars is not NumPy, there may be an extra step of conversion when using libraries that use NumPy, like TensorFlow and other libraries.\n\nGoal\nTo provide tips and educational information for data scientists and engineers about Polars and to help them fully use the robust features provided by Polars.\n\nTarget Audience\nThis talk assumes little to no knowledge of Polars, however, we assume audiences are familiar with pandas and Python.",
							streaming_link:
								"https://streamyard.com/watch/V3jSnGKwik2u?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/ACYD3S/",
						},
						{
							id: "f784252a-663e-4d25-990d-9b4bc37247cb",
							name: "Python and Volcanoes",
							room: "Class #6 - 3C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Martanto Martanto",
									job_title: "Data Scientist",
									organisation:
										"Pusat Vulkanologi dan Mitigasi Bencana Geologi",
									bio: "Hello! I'm a passionate developer and aspiring scholar currently navigating the exciting world of technology. Pursuing my Ph.D as seismologist and volcanologist.",
								},
							],
							tags: [],
							start: "15:45:00",
							end: "16:15:00",
							description:
								"As a country located between the world's three main tectonic plates, Indonesia is the country with the most active volcanoes in the world (127 volcanoes) However, out of 127 volcanoes, only 69 volcanoes are monitored by the Center for Volcanology and Geological Hazard Mitigation (PVMBG/CVGHM). In conducting volcano monitoring, seismic methods are used as the main method to determine whether volcanic activity is increasing or decreasing. The large number of monitoring instruments, resulting in the increase of monitoring data, so technological assistance is needed to speed up the data processing process and help in providing quick and accurate analysis. Python is used as one of the tools in the processing of volcanic seismic data. This process includes data quality control, normalization, validation, processing, databases, information dissemination, and an early warning system for the community and volcano stakeholders. Python in volcanoes is also not only used as a tool to monitor volcanic activity, but also used for research and development of volcano monitoring methods, including the use of machine learning for volcanic disaster mitigation. Ptyhon can help save people from volcanic eruption disasters.\n\nIn this presentation, we will explain the use of python in mitigating volcanic disasters. The points that will be conveyed include the following:\n1. A short story about volcanoes.\n2. Brief overview of volcanic seismic.\n3. Python, volcanoes and data science.\n4. Example and case studies.\n5. Questions and discussions.",
							streaming_link:
								"https://streamyard.com/watch/ZRTNtVMjfNC6?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/M879HE/",
						},
						{
							id: "f1949ed7-27ce-43c5-8849-4bcdb2b90133",
							name: "Empowering Data Analytics with Python: Real-World Applications and Insights",
							room: "Class #1 - 4A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Fajar Muslim",
									job_title: null,
									organisation: null,
									bio: "I am highly motivated to learn new things, get challenges from it and share my findings with others. Professionally, I have working in AI Engineer position for more than 2 years. Doing software engineering project and leading several person from various background, e.g: backend engineer, frontend engineer, UI/UX, DevOps engineer. My passion is developing solutions to enhance productivity for human life.",
								},
							],
							tags: [],
							start: "15:45:00",
							end: "16:15:00",
							description:
								"In this talk, we will explore how Python empowers data analytics to solve real-world problems effectively. We will delve into specific use cases, demonstrating how Python-based solutions can provide actionable insights. This session will offer unique perspectives based on real-life experiences, aiming to deepen the audience's understanding of Python's capabilities in the data analytics domain.\n\nThis talk will demonstrate how Python empowers data analytics, providing practical solutions to these real-world challenges through data analytics and visualization on social media data especially on Facebook. We'll show how to collect, preprocess, and engineer features using Python libraries such as pandas and numpy.\n\nNext, we'll dive into developing predictive models with scikit-learn and TensorFlow, highlighting techniques for training robust models that can accurately forecast. We'll also cover model evaluation metrics and cross-validation to ensure reliability.\n\nThe talk will then focus on deploying the predictive models using Streamlit, creating interactive dashboards that enable real-time data visualization and prediction. We'll explore visualization techniques with matplotlib and seaborn to effectively do data analytics.\n\nAttendees will gain insights from real-life cases, learn new approaches, and see practical examples of how data analytics and visualizations can be leveraged to enhance social media analytics",
							streaming_link:
								"https://streamyard.com/watch/stGzNifGzCKW?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/KMR37M/",
						},
						{
							id: "c0721bea-e75d-473a-a5f6-359d5ca2254f",
							name: "Build my own Pytest plugin for automated visual testing",
							room: "Class #4 - 3A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Aria Suseno",
									job_title: "Creator",
									organisation: "idejongkok.com",
									bio: "-",
								},
							],
							tags: [],
							start: "15:45:00",
							end: "16:15:00",
							description:
								"As a Software tester who love Python, I've often struggled with verifying visual elements during testing, such as design and components. This challenge led me to develop a solution for automated visual testing using Selenium for web and Appium for Android. I created a custom pytest plugin that performs visual comparisons, helping testers and developers detect discrepancies between actual and expected visuals. This plugin generates comparison images highlighting differences, making visual testing more efficient and reliable.\n\nVisual verification in software testing can be tedious when done manually. As a seasoned software tester using Python, I frequently faced difficulties ensuring visual elements matched design specifications. This inspired me to create an automated visual testing solution using Selenium for web automation and Appium for Android.\n\nIntroducing my custom pytest plugin, designed to streamline visual testing. It uses structural similarity index (SSIM) and color histogram comparison to detect visual differences accurately. By integrating this plugin into your testing framework, you can automate visual verification, making your tests more efficient and reliable.\n\nThe plugin generates visual comparison images that highlight discrepancies between the actual state of the application and the expected design. This helps identify issues quickly and provides clear visual evidence for debugging and reporting. My presentation will cover the development process and demonstrate how to integrate this tool into your testing workflow.\n\nJoin me at PyCon APAC 2024 to see my idea in action and learn how to use the pytest plugin for automated visual testing. This plugin aims to make the work of QA and developers easier and faster when testing software.",
							streaming_link:
								"https://streamyard.com/watch/tGVBjKcUcPhr?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/LVHVVH/",
						},
						{
							id: "a0e4128d-06dc-4eff-a958-ab528fe4bb88",
							name: "Practical GraphQL Server Development with FastAPI and Strawberry",
							room: "Class #3 - 4C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Takayuki Kawazoe",
									job_title: null,
									organisation: null,
									bio: "'- Economical Statistics at Doshisha Graduate school\n- SAP & Business Operation Consultant at ABeam Consulting\n- Business Consultant and Engineer at Shiga Area\n- Backoffice system manager at RevComm\n- CTO at PORTAMENT",
								},
							],
							tags: [],
							start: "15:45:00",
							end: "16:15:00",
							description:
								'Currently, there are several options for developing GraphQL servers with Python. In this session, we will focus on the combination of "FastAPI + Strawberry," discussing implementation methods and important considerations for operations.\n\nCurrently, there are several options for developing GraphQL servers with Python. In this session, we will focus on the combination of "FastAPI + Strawberry," discussing implementation methods and important considerations for operations. Additionally, we will cover methods for preparing REST API endpoints for GraphQL servers, which may be necessary in actual operations.\n\nOutline:\n\nBenefits of Building a Backend with GraphQL\nWhat is Strawberry?\nHow to Combine FastAPI and Strawberry\nCases Where REST API is Needed and How to Coexist with REST API\nTips for Using with SQLAlchemy\nTips Useful for Frontend Development',
							streaming_link:
								"https://streamyard.com/watch/MvKAQNQqh34g?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/3CGWKR/",
						},
						{
							id: "731aaea7-ef54-4757-bb78-649084cae361",
							name: "Safeguard Critical Changes With Python : Kafka ACLs",
							room: "Class #2 - 4B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Theodore Chandra",
									job_title: null,
									organisation: null,
									bio: "Theodore Gautama Chandra or Theo works as a system engineer on Goto Financial, more specifically on the Stateful Components Team that manages Stateful Components such as Postgres, Redis and Kafka. Theo specifically works on Kafka and currently setting up a new Kafka environment for the whole GoTo Financial engineering ecosystem. Previously Theo worked as a devops engineer in the midtrans team where he handles the whole midtrans systems infrastructure. Theo has a degree in engineering physics and has been using Python for data analysis and machine learning for his university projects and currently using Python to automate sysadmins tasks in his current work.",
								},
							],
							tags: [],
							start: "15:45:00",
							end: "16:15:00",
							description:
								"Kafka is a widely used open-source event streaming platform that aggregates data events and works as a pub-sub. To make sure each application can only have access to messages they are allowed to consume and produce Kafka Admins can implement Kafka ACL rules to determine which principals are allowed to produce and consume messages to certain topics. Unfortunately reading and changing ACLs through Kafka CLI can be unintuitive and prone to mistakes for users who are not familiar with how Kafka ACLs work. A simple error in changing Kafka ACLs can cause system failures on multiple services that rely on Kafka, especially any changes that include wildcard. To prevent this, a quick Python script leveraging the confluent_kafka library can safeguard these changes by reviewing their changes before applying them, preventing catastrophic incidents from happening.\n\nIn this talk I would like to present a quick Python script I created to create and remove Kafka ACLs, this script can be created quickly and allows us to review our changes before any change on Kafka clusters. This would show how Python can be easily leveraged to make simple scripts that can automate and simplify changes for sysadmins, it can also safeguard critical changes.",
							streaming_link:
								"https://streamyard.com/watch/cHc5fAx4MQjz?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/VFY9NN/",
						},
						{
							id: "3c289eb6-4f1d-4d23-901c-7bc1508bae28",
							name: "Developing Python Libraries Using Rust",
							room: "Class #5 - 3B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Shota Kokado",
									job_title: "Backend Developer",
									organisation: "RevComm",
									bio: "-",
								},
							],
							tags: [],
							start: "15:45:00",
							end: "16:15:00",
							description:
								"It is possible to use functionalities (modules, classes, functions) implemented with languages other than Python as Python libraries.\nWell-known examples, Numpy and Pandas are primarily implemented in C/C++ for poweful performance.\n\nRecently, the use of the Rust language has gained attention in addition to C/C++.\nIn this talk, I will explain the advantages and procedures for developing Python libraries using Rust.\nI will also introduce examples of libraries where Rust is being used.\n\nFunctionalities (modules, classes, functions) implemented in languages other than Python can be used as Python libraries. Well-known examples like Numpy and Pandas are primarily implemented in C for speed optimization.\n\nOf course, since PyCon is a conference for Python developers, I will ensure the content does not lean too heavily towards Rust.\n\nIntroduction: Introduce the benefits and internal mechanisms of developing Python libraries with compiled languages like C/C++ and Rust.\nDevelopment Methods\nTesting and Debugging\nDeployment and Distribution\nPractical Use Cases: Touch on the internals of pydantic v2 (pydantic-core), which recently became a hot topic because its core implementation in Rust, and introduce how major libraries are being developed.",
							streaming_link:
								"https://streamyard.com/watch/QU9ANqdS8AEq?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/V8V7EW/",
						},
						{
							id: "c16fa514-b0c1-486b-b380-5def1a162a7f",
							name: "Organized Chaos: Demystifying Python’s Garbage Collection",
							room: "Class #2 - 4B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Sejal Gupta",
									job_title: null,
									organisation: null,
									bio: "-",
								},
								{
									name: "Sidhant Gupta",
									job_title: "Software Engineer",
									organisation: "Salesforce",
									bio: "-",
								},
							],
							tags: [],
							start: "16:30:00",
							end: "17:00:00",
							description:
								"Ever wondered what goes on behind the scenes to keep your Python apps running smoothly? Join us for a deep dive into the world of garbage collection and resource allocation! We’ll uncover the secrets of Python's memory management, from reference counting to tackling those pesky cyclic references. Uncover how Python automatically identifies and cleans up unused objects, ensuring optimal performance using gc module. You'll also get a scoop of tools like memory_profiler and tracemalloc. Whether you're a Python pro or just curious, this talk will help you keep your code lean, clean and efficient. Don't miss it!\n\n-Introduction: An overview of Python’s garbage collection and its importance.\n-Memory Management Basics: We’ll touch upon the basics of memory management and reference counting using gc module.\n-Cyclic Garbage Collection: We’ll discuss how Python handles cyclic references.\n-Avoiding Memory Leaks: Common pitfalls and solutions.\n-Tools for Monitoring: Introduction to memory_profiler and tracemalloc\n-Demonstration through code: Case study and demo of memory leak and how to tackle it.\n-Best Practices: Guidelines for effective memory management.\n-Q&A Session: We'll conclude with an open Q&A session to address audience questions and provide further insights.",
							streaming_link:
								"https://streamyard.com/watch/StuBrs8HC6ps?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/YHZSVP/",
						},
						{
							id: "128924a9-d926-4966-9ed2-595937e0d69a",
							name: "Sky Full of Stars",
							room: "Class #6 - 3C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "citra sagala",
									job_title: null,
									organisation: null,
									bio: "Data Scientist at NTTDATA (Indonesia)",
								},
							],
							tags: [],
							start: "16:30:00",
							end: "17:00:00",
							description:
								"How many stars do you know so far? Maybe you are familiar with Canopus, Capela, Vega from Sherina's Adventure Film. There are many stars outside our solar system. Or maybe you are familiar with the zodiac signs? Zodiac signs in astronomy are a collection of several stars called constellations. There is a lot of knowledge about the stars we see in the sky. By using python, we can see information about the stars in the sky using better visualization. You can also use this application to view star coordinates for observations.\n\nIn real life, we often encounter challenges in visualizing data that is easy to understand, especially for geospatial data that has more than two dimensions. This talk is about how we can map stars using python. This map will contain everything about stars such as star coordinates, star names, constellations, and perspective mapping using cartographic techniques. Cartography is basically a visualization technique, but more specifically uses geospatial data. Cartography is used to create visualizations that are easy for humans to understand in representing geospatial data, in this case using star data. Although this project is a personal project that I made because I like stars and visualization and not represents the business processes of astronomers anywhere. But, star visualization can make it easier for astronomers to observe stars.",
							streaming_link: "-",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/WT8WFG/",
						},
						{
							id: "abc84a5f-0ff2-45b0-8f72-2aa44680a252",
							name: "Multi-Modal Data Fusion in Heterogeneous Data for Artificial Intelligence: A New Perspective on Data Processing (An Agri Data Case Study)",
							room: "Class #1 - 4A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Nur Arifin Akbar",
									job_title: null,
									organisation: null,
									bio: "Doctoral Researcher under EU commission Project",
								},
								{
									name: "Asro Nasiri",
									job_title: null,
									organisation: null,
									bio: "Doctoral Researcher at the University of Amikom Yogyakarta. Co Founder Frogs Indonesia an agriculture drone manucfature.",
								},
							],
							tags: [],
							start: "16:30:00",
							end: "17:00:00",
							description:
								"This talk will explore the development and implementation of multi-modal data fusion processing using Python, with a focus on an agricultural data case study. The session will introduce a framework and techniques for effectively processing and utilizing diverse data types to enhance decision-making in agriculture. Attendees will learn about the application of transfer learning to improve data sharing and interoperability, considering factors such as suitability, affordability, openness, and acceptability.\n\nThe objective of this session is to present a comprehensive approach to implementing multi-modal data fusion processing using Python, illustrated through an agricultural data case study. Key topics will include:\nIntroduction to Multi-Modal Data Fusion: An overview of how combining different data types (e.g., sensor data, satellite imagery, and tabular data) can enhance decision-making in agriculture and other fields.\nFramework for Data Processing: Detailed discussion on the architecture and techniques for processing diverse data types to make them usable for machine learning models. This includes data cleaning, normalization, and feature extraction.\nTransfer Learning for Data Sharing: Explanation of how transfer learning can be applied to improve the sharing and interoperability of agricultural data, focusing on their suitability, affordability, openness, and acceptability. This enables leveraging pre-trained models on heterogeneous datasets.\nReal-World Applications: Practical examples of how the proposed framework has been applied to real agricultural datasets to improve crop yield prediction and disease detection. Case studies demonstrating the benefits for farmers and stakeholders.\nChallenges and Solutions: Addressing potential challenges in implementing the framework, such as data quality issues, computational resources, and model interpretability. Proposed solutions and best practices will be discussed.\nThe talk will be structured to maximize audience engagement and understanding:\nOpening (3 min): Introduce the topic, motivation, and outline of the presentation.\nBackground (5 min): Provide context on multi-modal data fusion and its relevance to agriculture.\nProposed Framework (10 min): Dive into the technical details of the data processing framework and transfer learning approach, supported by diagrams and code snippets.\nCase Study (5 min): Present a real-world agricultural case study showcasing the practical application and benefits of the proposed techniques.\nChallenges & Solutions (5 min): Discuss the main challenges encountered and the solutions implemented, providing valuable insights for practitioners.\nConclusion (2 min): Summarize key takeaways and encourage attendees to explore multi-modal data fusion in their own projects.\nBy the end of the session, participants will gain a solid understanding of multi-modal data fusion processing using Python and how transfer learning can facilitate effective data sharing in various sectors, with a special focus on agriculture. They will leave with practical insights and inspiration to apply these techniques in their own work.",
							streaming_link:
								"https://streamyard.com/watch/WptTrKxCBvyM?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/RPN3WX/",
						},
						{
							id: "91830acf-d378-48e5-bdd2-d8e69c2d7984",
							name: "Improve System Maintenance & Troubleshooting Efficiency & Effectiveness by Leveraging IoT Technology",
							room: "Class #4 - 3A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Muhammad Verly",
									job_title: null,
									organisation: null,
									bio: "A software engineer with a passion for computer science, AI/ML, and embedded systems technology.",
								},
							],
							tags: [],
							start: "16:30:00",
							end: "17:00:00",
							description:
								"Efficient and effective system maintenance and troubleshooting in manufacturing industries are crucial for ensuring uninterrupted production processes. This proposal proposes leveraging IoT (Internet of Things) technology to enhance the monitoring and management of critical system temperatures, particularly in control rooms where temperature fluctuations can impact operational stability. The proposed solution involves the integration of micro controller (Arduino) and microcomputer (Raspberry Pi) technologies combined with software engineering to create an integrated and centralized smart critical room temperature monitoring system.\n\nIn this system, nodes consisting of micro controllers and sensors are strategically deployed throughout the room to monitor temperature and humidity variations. These nodes transmit data to a central master unit (Raspberry Pi) which collects, processes, and publishes the aggregated data to a message broker. A central server then consumes the data from the message broker, processes it further, and provides real-time monitoring capabilities to users across various locations. This approach eliminates the need for manual temperature checks at individual points, enabling proactive maintenance and swift troubleshooting actions based on real-time data insights.\n\nBy implementing this IoT-based solution, manufacturing industries can significantly improve system maintenance efficiency and effectiveness, thereby enhancing operational reliability and minimizing downtime due to temperature-related issues.\n\nTransform manufacturing maintenance with cutting-edge IoT technology. Monitor critical room temperatures in real-time with Arduino and Raspberry Pi. Centralize data for seamless troubleshooting and enhanced efficiency, and elevate the maintenance strategy",
							streaming_link:
								"https://streamyard.com/watch/fBwX5U7GGQYp?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/JKJS8X/",
						},
						{
							id: "f02004f0-9bad-443a-a04d-117c0402307f",
							name: "Supercharge Your Python Web App Security Using Logto.io as Your Authentication Service",
							room: "Class #5 - 3B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Rizqon Sadida",
									job_title: "Fullstack Developer",
									organisation: "Nevacloud",
									bio: "Hi, I'm Kokon, a full-stack engineer at NevaCloud. I specialize in developing and maintaining the NevaCloud website, ensuring a seamless and efficient user experience. Technology has always been my passion, driving me to stay updated with the latest trends and continuously improve my skills. In my free time, I love gaming, immersing myself in virtual worlds, and connecting with fellow tech enthusiasts.",
								},
							],
							tags: [],
							start: "16:30:00",
							end: "17:00:00",
							description:
								"It is essential to prioritize security in web app development. A robust and secure authentication service is necessary to protect clients' data and privacy. However, in the development of web app, we often face several situations that demand us to deliver it to the client quickly. To address these challenges, we need a system that is not only able to enhance security but also does not take a long time to set up. Logto.io is a modern authentication solution that offers a variety of features to enhance web app security like MFA (Multi-Factor), Social Auth (Google, Github, etc), User Management, Customizable user sign-in experience, and much more. The best part is that Logto.io is open source. Therefore, it allows you to deploy it with Docker, as a standalone system, or even in the cloud using their provided service.\n\nDo you struggle to create a robust authentication system? Do you want to add social authentication to your Python application effortlessly? Or do you not have much time to code an authentication system from scratch? In this talk, together we will learn to implement logto.io as an authentication service for our web app. We will use Django as an example, but we are not limited to that. You can implement this in every framework you like.",
							streaming_link:
								"https://streamyard.com/watch/chYDtCwjJpz3?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/9RVEPW/",
						},
						{
							id: "697198a8-e43e-4c5a-8e79-1c19a117e7ff",
							name: "Building a Sustainable Community",
							room: "Class #3 - 4C",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "James Tang",
									job_title: null,
									organisation: null,
									bio: "-",
								},
							],
							tags: [],
							start: "16:30:00",
							end: "17:00:00",
							description:
								"COVID-19 has impacted PyCon MY greatly in terms of the size of the community and funding. The effect has prompted the core members to look into a more sustainable way for the survival of the community.\n\nHere are the 4 pillars for sustainability:\n1. Number of community members\n2. Fundings\n3. Leaderships\n4. Collaborations with other communities, government agencies and industries.\n\nIn the talk, I will share the reasons we look into the above pillars, what plan we have, and the progress.",
							streaming_link:
								"https://streamyard.com/watch/XUviDD9Yr4rD?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/AF7GU9/",
						},
					],
				},
				{
					name: "Day 1",
					date: "2024-10-25",
					schedules: [
						{
							id: "01b00fac-8b5c-4617-8fbf-d05d012cae1a",
							name: "Building Python Tools for Probing the Digital Footprint",
							room: "Workshop Class #2 - 3B",
							language: "Indonesian",
							audience_level: null,
							speakers: [
								{
									name: "Nadhiar Ridho Wahyu Pradana",
									job_title: "IT",
									organisation: "National Cyber and Crypto Agency",
									bio: "-",
								},
							],
							tags: [],
							start: "09:30:00",
							end: "11:00:00",
							description:
								'Workshop "Building Python Tools for Probing the Digital Footprint" ini dirancang untuk memberikan pemahaman mendalam tentang cara membangun dan menggunakan alat berbasis Python untuk menganalisis jejak digital. Peserta akan diperkenalkan pada teknik dan metodologi terbaru dalam pengumpulan, analisis, dan visualisasi data digital. Melalui serangkaian sesi praktikum dan teori, peserta akan mempelajari cara mengembangkan skrip Python yang efisien untuk mengekstraksi informasi dari berbagai sumber data online, seperti media sosial, situs web, dan basis data publik. Workshop ini juga mencakup teknik penelusuran email, username, dan informasi identitas digital lainnya. Selain itu, workshop ini akan membahas isu-isu etis dan privasi yang terkait dengan analisis data digital, serta memberikan panduan tentang praktik terbaik dalam pengelolaan dan penyimpanan data. Dengan mengikuti workshop ini, peserta diharapkan mampu membangun alat yang dapat membantu dalam penelitian, bisnis, dan aplikasi lainnya yang membutuhkan analisis mendalam terhadap jejak digital.\n\nWorkshop ini bertujuan untuk memberikan keterampilan praktis dalam membangun dan menggunakan alat berbasis Python untuk menganalisis jejak digital. Workshop ini dirancang bagi para profesional, peneliti, dan penggiat teknologi yang ingin memperdalam kemampuan mereka dalam pengumpulan dan analisis data digital. Berikut adalah rincian materi yang akan dibawakan dalam workshop ini:\n\nPengantar OSINT (Open Source Intelligence):\n* Definisi dan konsep dasar OSINT\n* Pentingnya OSINT dalam analisis data digital\n* Alat dan teknik yang digunakan dalam OSINT\n\nPengumpulan Data dari Sumber Online:\n* Penggunaan API untuk mengumpulkan data\n* Penelusuran email dan username dari berbagai sumber\n\nAnalisis dan Visualisasi Data:\n* Metode untuk memproses data digital\n\nPenelusuran dan Analisis Jejak Digital:\n* Strategi untuk menelusuri informasi personal seperti email, username, dan profil sosial media\n\nEtika dan Privasi dalam Analisis Data:\n* Isu-isu etis terkait dengan pengumpulan dan analisis data digital\nPedoman privasi dan perlindungan data\n\nTarget :\nWorkshop ini ditujukan bagi individu yang memiliki dasar pengetahuan dalam pemrograman Python dan tertarik untuk memperluas keterampilan mereka dalam analisis data digital. Ini termasuk profesional TI, peneliti, analis data, dan siapa saja yang bekerja di bidang keamanan siber atau investigasi digital.',
							streaming_link:
								"https://streamyard.com/watch/DcsjKnXBkZ2h?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/N7W7VQ/",
						},
						{
							id: "67c5a363-bc12-405b-9d1f-89bd1a5dba60",
							name: "Deploy your Machine Learning model with Fast API",
							room: "Workshop Class #1 - 3A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Cheuk Ting Ho",
									job_title: null,
									organisation: null,
									bio: "After having a career in Data Scientist and Developer Relations, Cheuk dedicated her work to the open-source community and founded CMD Limes, a Python consultants cooperation. She has also co-founded Humble Data, a beginner Python workshop that has been happening around the world. She has served the EuroPython Society board for two years and is now a fellow and director of the Python Software Foundation.",
								},
							],
							tags: [],
							start: "09:30:00",
							end: "11:00:00",
							description:
								"One of the challenges for a machine learning project is to deploy it. Fast API provides a fast and easy way to deploy a prototype with less software development expertise and yet allow it to be developed into a professional web service. We will look at how to do it.\n\nIn this workshop, we will go deeper into how to prototype a machine-learning project with Fast API. Fast API allows the creation API server with very little effort, it is easy to deploy a pre-trained model, but for models that require re-training, the challenge of when and how to retrain a model and update for a service in use becomes complicated. We will cover the aspect of delivering a pre-trained model and the design of re-training the model. This workshop will also provide suggestions for deploying the machine learning project so it can migrate from a prototype to a functional service in production.\n\nGoal\nThe workshop aims to equip a data science team capability to convert their machine learning project into a prototype service using Fast API, at the end of the workshop, they will not just be able to deliver API calls to a pre-trained model, but they will also be able to design when to re-train and update the model and be ready to migrate the prototype into production.\n\nTarget audience\nData scientists who have little or no experience using Fast API or putting a machine learning model into production. This workshop will assume the audience already knows how to build and train a basic machine learning model (e.g. using Sci-kit learn).\n\nPrerequisite\nThis workshop assumes that you have experience code in Python and have knowledge using some of the data science and machine learning libraries such as pandas, Scikit-learn and Keras. Details explaining the usage of those libraries will be skipped in this workshop\n\nPreflight check\nPlease make sure you are using Python 3.12, this is the Python version that we will be using. You may try using other versions of Python but we will not guarantee all exercises will work the same.\n\nIf you want to complete part 3 of the workshop, you will need to be able to deploy docker containers locally.",
							streaming_link:
								"https://streamyard.com/watch/6FRbU5nmrsJa?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/VLGQBL/",
						},
						{
							id: "46b03a3e-26be-4be7-a99a-eb40bf1b51bd",
							name: "Building IoT and Camera Projects with XIAO ESP32S3 and MicroPython",
							room: "Workshop Class #2 - 3B",
							language: "Indonesian",
							audience_level: null,
							speakers: [
								{
									name: "Hendra Kusumah",
									job_title: null,
									organisation: null,
									bio: "Staff and educator at Universitas Raharja in Indonesia and a Ranger at Seeed Studio. Already published a few of open source hardware project at hackster.io specializing at IoT and embedded system project. Enthusiastic on Machine Learning field especially TinyML",
								},
							],
							tags: [],
							start: "12:45:00",
							end: "14:15:00",
							description:
								"MicroPython is a lean and efficient implementation of the Python 3 programming language that includes a small subset of the Python standard library and is optimised to run on microcontrollers and in constrained environments.\n\nSince its first initiation in 2014, micropython has already supported many microcontrollers including the ESP32S3 which is the main brain in the Xiao ESP32S3 Sense development board.\n\nIn this page I will guide on how to use the the Xiao ESP32S3 Sense capability using the simple and easy syntax from micropython",
							streaming_link:
								"https://streamyard.com/watch/PbHJqsEfgqZa?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/EQZWC3/",
						},
						{
							id: "76655b91-f61a-4ef3-8ed8-dd3423bf9df1",
							name: "The robots are coming",
							room: "Workshop Class #1 - 3A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Colin Bell",
									job_title: null,
									organisation: null,
									bio: "I am an experienced trainer with a background in software engineering. My main training areas are programming practices, automated testing and IoT. I am from the UK and I also work around Asia. I write about some of my experience at profoundsource.co.uk/blog.",
								},
							],
							tags: [],
							start: "12:45:00",
							end: "14:15:00",
							description:
								"The robots are coming... in this fun hands-on session we will use wheeled robots based on the popular BBC Micro:bit microcontroller and programmed using MicroPython. We will learn how to navigate, how to avoid obstacles and how to follow a line",
							streaming_link:
								"https://streamyard.com/watch/N9ZMyB5idXqh?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/LQTHNX/",
						},
						{
							id: "0dd6d5b4-3dce-41d8-94ba-328653afec03",
							name: "Writing Python modules in Rust - PyO3 101",
							room: "Workshop Class #2 - 3B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Cheuk Ting Ho",
									job_title: null,
									organisation: null,
									bio: "After having a career in Data Scientist and Developer Relations, Cheuk dedicated her work to the open-source community and founded CMD Limes, a Python consultants cooperation. She has also co-founded Humble Data, a beginner Python workshop that has been happening around the world. She has served the EuroPython Society board for two years and is now a fellow and director of the Python Software Foundation.",
								},
							],
							tags: [],
							start: "14:30:00",
							end: "16:00:00",
							description:
								'In this workshop, we will cover the very basic of using PyO3 - rust library that package rust crates into Python modules. This is the most popular tool in terms of creating Python libraries with Rust.\n\nIn recent years, Rust has been getting more and more popular over other similar programming languages like C and C++ due to its robust compiler checking and ownership rules to make sure memory is safe. Hence there are more and more Python libraries that have been written in Rust natively with a Python API interface. One of the tools that have been driving this movement is PyO3, a toolset that proves Rust bindings for Python and tools for creating native Python extension modules.\n\nIn this interactive workshop, we will cover the very basics of using PyO3. There will be hands-on exercises to go from how to set up the project environment to writing a "toy" Python library written in Rust using PyO3. We will cover a lot of expectations of the API provided by PyO3 to create Python functions, modules, handling errors and converting types.\n\nGoal\nTo give developers who are not familiar with PyO3 an introduction to PyO3 so they can consider building their Python libraries with Rust to make use of Rust\'s memory-safe property and parallelism ability.\n\nTarget audiences\nAny developers who are interested in developing Python libraries using Rust. It will be an advantage if the attendees are comfortable writing in Rust. However, attendees are not required to be familiar with Rust as all the Rust codes will be provided. Basic knowledge of Python will be assumed from the attendees.\n\nPreflight checklist\nInstall/ Update Rust\nMake sure having Python 3.8 or above (recommend 3.12)\nMake sure using virtual environment (recommend pyenv + virtualenv)\nWindows checklist\nIn this workshop we recommend using Unix OS (Mac or Linux). If you use Windows, you may encounter problems with Rust and Maturin. To minimise issues that you may encounter, please go through the extra checklist below:\n\n-Install the c++ build tools\n-Check the dll files are linked correctly',
							streaming_link:
								"https://streamyard.com/watch/SWTAKpYEiBDH?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/Q8MLWL/",
						},
						{
							id: "fb920b42-8268-4adb-bb75-6d5043dc888a",
							name: "Building RAG pipeline using Open Source LLMs",
							room: "Workshop Class #1 - 3A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Tarun Jain",
									job_title: "Data Scientist",
									organisation: "AI Planet",
									bio: "Tarun Jain is a Data Scientist at [AI Planet](https://aiplanet.com), a Belgium based AI Startup. He is also a renowned speaker and recognised as [Google Developer Expert in AI/ML](https://developers.google.com/profile/u/tarunjain). Furthermore, he has contributed to various Open Source projects and is currently part of [Google Summer of Code 2024 at RedHenLab](https://summerofcode.withgoogle.com/programs/2024/projects/8D9AhF8O). \n\nHe is also a content creator at [AI with Tarun](https://www.youtube.com/@aiwithtarun) Youtube channel.",
								},
							],
							tags: [],
							start: "14:30:00",
							end: "16:00:00",
							description:
								"Large Language models are all over the place, driving the advancement of AI in today's era. For enterprises and businesses, integrating LLM with custom data sources is crucial to provide more contextual understanding and reduce hallucinations. In my talk, I'll emphasize on building an effective RAG pipeline for production using Open Source LLMs. In simple words, Retrieval Augmented Generation involves retrieving relevant documents as context for user queries and leveraging LLMs to generate more accurate responses.\n\nProblem Statement\n-Closed-source models like GPT, Claude, and Gemini demonstrate significant potential as LLMs, but enterprises and startups with sensitive data hesitate to rely on them due to data privacy and security concerns.\n-While numerous solutions and resources on the internet utilize closed-source models like GPT and Gemini to construct RAG pipelines, there is limited information available on building effective RAG pipelines using Open Source LLMs.\n-When it comes to using Open Source LLM, it is important to understand the prompt template to use to get response in specific format. While those with a basic grasp of Transformers can adjust parameters to enhance results, this approach may not be suitable for everyone.\n-Basic RAG solutions often struggle and tend to produce hallucinations.\n\nIn my talk, I will demonstrate how to build effective pipeline to build RAG using Open Source LLM such as Mistral or Llama.",
							streaming_link:
								"https://streamyard.com/watch/fNh6awkBKPg2?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/F83MKP/",
						},
						{
							id: "10f30889-2318-4604-9453-d2e5302410e0",
							name: "Web Scraping Made Easy with Scrapy",
							room: "Workshop Class #2 - 3B",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Sigit Dewanto",
									job_title: null,
									organisation: null,
									bio: "Web scraping engineer, mostly with Scrapy.",
								},
							],
							tags: [],
							start: "16:00:00",
							end: "17:30:00",
							description:
								'This workshop aims to demonstrate how web scraping task can be made easy with Scrapy. Scrapy is an open source web scraping framework written in Python. It allows developers to focus on developing web crawlers without being bothered by lower-level details such as managing HTTP request scheduling and concurrency. We will use Scrapy to extract data from toscrape.com, a web scraping sandbox that can be used by anyone to learn web scraping. Participants will gradually learn how to perform web scraping, starting from simple task like extracting data from a single web page to more complex tasks such as extracting data from AJAX endpoints.\n\nThe target participants of this workshop are individuals with basic programming skill (not necessarily in Python) who understand basic concepts of HTTP and HTML document structure.\n\nThe World Wide Web contains a vast amount of interesting data. Unfortunately, most of those data are presented as HTML (HyperText Markup Language) documents intended for direct human consumption, not for computers. In To enable computers to process those data, we need to extract them from the HTML documents. Such process is commonly referred to as "web scraping".\n\nThis workshop aims to demonstrate how web scraping task can be made easy with Scrapy. Scrapy is an open source web scraping framework written in Python. It allows developers to focus on developing web crawlers without being bothered by lower-level details such as managing HTTP request scheduling and concurrency. We will use Scrapy to extract data from toscrape.com, a web scraping sandbox that can be used by anyone to learn web scraping. Participants will gradually learn how to perform web scraping, starting from simple task like extracting data from a single web page to more complex tasks such as extracting data from AJAX endpoints.\n\nThe target participants of this workshop are individuals with basic programming skill (not necessarily in Python) who understand basic concepts of HTTP (HyperText Transport Protocol) and HTML document structure.',
							streaming_link:
								"https://streamyard.com/watch/hE9uaDBAatCV?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/QMKA7K/",
						},
						{
							id: "322251a9-033c-480a-a77a-323098a1dae3",
							name: "Building AI Agent Bot with RAG, Langchain and Reasoning Engine",
							room: "Workshop Class #1 - 3A",
							language: "English",
							audience_level: null,
							speakers: [
								{
									name: "Imre Nagi",
									job_title: null,
									organisation: null,
									bio: "-",
								},
							],
							tags: [],
							start: "16:00:00",
							end: "17:30:00",
							description:
								"In this workshop, participants will embark on a comprehensive journey to build an AI agent using advanced tools and techniques such as Retrieval-Augmented Generation (RAG), Langchain, and Reasoning Engine. Over the course of 90 minutes, attendees will gain hands-on experience and valuable insights into the following key areas:\n\n1. Preparing Documents for RAG: Learn how to prepare documents for Retrieval-Augmented Generation by embedding, chunking, and storing them in a vector database. We will utilize the pgvec extension in PostgreSQL to efficiently manage and query our document vectors.\n\n2. Creating a Document Retriever Tool: Discover how to develop a powerful document retriever tool that performs efficient searches and retrievals from the vector database. This tool will be crucial for augmenting prompts with relevant information, enhancing the AI agent's responses.\n\n3. Developing API Tools for Third-Party Interaction: Explore the process of creating API tools that enable the AI agent to interact seamlessly with third-party systems API. These tools will expand the agent's capabilities, allowing it to execute complex tasks and retrieve external data.\n\n4. Building an Agent in Langchain: Dive into the creation of an intelligent agent using Langchain. Participants will learn how to manage chat histories through session stores (both in-memory and persistent storage like Redis) and leverage various tools to empower the agent to make decisions and perform actions autonomously.\n\n5. Deploying the AI Agent to the Cloud with Reasoning Engine: Gain practical knowledge on deploying the AI agent to the cloud using the Reasoning Engine. This section will demonstrate how to transition from development to a production-ready prototype swiftly, ensuring the agent's scalability and reliability.",
							streaming_link:
								"https://streamyard.com/watch/NdfTRbJtnGGj?embed=true",
							pretalk_link: "https://pretalx.com/pycon-apac-2024/talk/DHXE9M/",
						},
					],
				},
			],
		},
	};
	return scheduleSchema.parse(data);
};

export const talksScheduleSchema = z.array(
	z.object({
		day: z.string(),
		separatorDate: z.string(),
		separatorEndDate: z.string(),
		talks: z.array(
			z.object({
				id: z.string(),
				code: z.string().nullable(),
				room: z.string(),
				title: z.string().nullable(),
				abstract: z.string().nullable(),
				speakers: z.array(z.string()),
				start: z.string(),
				end: z.string(),
				streaming_link: z.string().nullable(),
			}),
		),
	}),
);

export type talksScheduleType = z.infer<typeof talksScheduleSchema>;
