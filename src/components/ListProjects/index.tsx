import Project from '../Project'

import { dataProjects } from '../../data/projects'

import './style.css'

const ListProjects = () => {
  return (
    <div className="list-project">
			{!dataProjects ? 
				(
					<p>Nada por aqui!</p>
				) : 
				(
					dataProjects.map((project, index) => {
						const { name, about, link } = project

						return (
							<Project
								key={index}
								name={name}
								about={about}
								link={link}
							/>
						)
					})
				)
			}
    </div>
  )
}

export default ListProjects