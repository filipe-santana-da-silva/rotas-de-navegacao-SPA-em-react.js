import ProjectForm from '../projects/ProjectForm';
//import { Link } from 'react-router-dom'
import LinkButton from '../components/LinkButton';
import styles from './NewProject.module.css'

function NewProject() {
//    const history = useHistory()
    function createPost(project) {
        //initialize cost and services
        project.cost = 0
        project.services = []
        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        }).then((resposta) => resposta.json())
        .then((data) => {console.log(data)
            //redirect
         
        })
        .catch(error => console.log(error))
    }
    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject;