import './style.css'

type project = {
	name: string;
	about: string;
	link: string;
}

const Project = ({ name, about, link }: project) => {
	return (
		<div className="project">
			<h2 id="project-title">{name}</h2>
			<p className="about">{about}</p>
			<button className="project-link">
				<a  
					href={link} 
					target='_blank'
				>
					Ver Mais
				</a>
			</button>
		</div>
	)
}

export default Project