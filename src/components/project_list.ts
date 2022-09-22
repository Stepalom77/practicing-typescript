import { Component } from "./base_component";
import { autoBind } from "../decorators/auto_bind";
import { ProjectStatus } from "../models/project";
import { projectState } from "../state/project_state";
import { Project } from "../models/project";
import { DragTarget } from "../models/drag_drop_interfaces";
import { ProjectItem } from "./project_item";


    export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
        assignedProjects:Project[];
        constructor(private type:'active' | 'finished'){
            super('project-list', 'app',false ,`${type}-projects`)
            this.assignedProjects = []
    
            this.configure()
            this.renderContent()
        }
    
        @autoBind
        dragOverHandler(event: DragEvent): void {
            if(event.dataTransfer && event.dataTransfer.types[0] === 'text/plain'){
                event.preventDefault()
                const listEl = this.element.querySelector('ul')!
                listEl.classList.add('droppable')
            }
            
        }
    
        @autoBind
        dropHandler(event: DragEvent): void {
            const projectId = (event.dataTransfer!.getData('text/plain'))
            projectState.moveProject(projectId, this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished)
        }
    
        @autoBind
        dragLeaveHandler(_: DragEvent): void {
            const listEl = this.element.querySelector('ul')!
            listEl.classList.remove('droppable')
        }
    
        private renderProjects(){
            const listEl = document.getElementById(`${this.type}-project-list`)! as HTMLUListElement
            listEl.innerHTML = ''
            for(const projectItem of this.assignedProjects){
               new ProjectItem(this.element.querySelector('ul')!.id, projectItem)
            }
        }
    
        configure(): void {
            this.element.addEventListener('dragover', this.dragOverHandler)
            this.element.addEventListener('dragleave', this.dragLeaveHandler)
            this.element.addEventListener('drop', this.dropHandler)
            projectState.addListener((projects:Project[] )=> {
                const relevantProjects = projects.filter(prj => {
                    if(this.type === 'active'){
                        return prj.status === ProjectStatus.Active
                    }else {
                        return prj.status === ProjectStatus.Finished
                    }
                    })
                this.assignedProjects = relevantProjects
                this.renderProjects()
            })
        }
    
        renderContent(){
            const listId = `${this.type}-project-list`
            this.element.querySelector('ul')!.id = listId
            this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + 'PROJECTS'
        }
    }
