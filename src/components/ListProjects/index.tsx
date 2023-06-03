import Project from '../Project'

import './style.css'

const ListProjects = () => {
  return (
    <div className="list-project">
			<Project
				key={1}
				name='Biopark teste'
				about='Projeto desenvolvido para teste trainne na empresa Biopark.'
				link='https://github.com/EricOliveiras/biopark-teste'
			/>
    </div>
  )
}

export default ListProjects