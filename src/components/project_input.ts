///<reference path="base_component.ts" />
///<reference path="../decorators/auto_bind.ts" />
///<reference path="../state/project_state.ts" />
///<reference path="../models/project.ts" />
///<reference path="../models/drag_drop_interfaces.ts" />
namespace App {
    export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
        titleInputElement:HTMLInputElement;
        descriptionInputElement:HTMLInputElement;
        peopleInputElement:HTMLInputElement;
        constructor(){
            super('project-input','app', true, 'user-input' )
            this.titleInputElement = this.element.querySelector('#title')! as HTMLInputElement
            this.descriptionInputElement = this.element.querySelector('#description')! as HTMLInputElement
            this.peopleInputElement = this.element.querySelector('#people')! as HTMLInputElement
    
            this.configure()
        }
    
        configure(){
    
            this.element.addEventListener('submit', this.submitHandler)
        }
        renderContent(): void {}
    
        private gatherUserInput():[string, string, number] | void{
            const enteredTitle = this.titleInputElement.value
            const enteredDescription = this.descriptionInputElement.value
            const enteredPeople = this.peopleInputElement.value
            const titleValidatable:Validatable = {
                value: enteredTitle,
                required:true
            }
            const descriptionValidatable:Validatable = {
                value: enteredDescription,
                required:true,
                minLength: 5
            }
            const peopleValidatable:Validatable = {
                value: +enteredPeople,
                required:true,
                //min:1,
                max:5
            }
            if(!validate(titleValidatable) || !validate(descriptionValidatable) || !validate(peopleValidatable)){
                alert('Invalid input, please try again!')
                return
            } else {
                return [enteredTitle, enteredDescription, +enteredPeople]
            }
        }
    
        private clearInput(){
            this.titleInputElement.value = ''
            this.descriptionInputElement.value = ''
            this.peopleInputElement.value = ''
        }
    
        @autoBind
        private submitHandler(event:Event){
            event.preventDefault()
            const userInput = this.gatherUserInput()
            if(Array.isArray(userInput)){
                const [title, descriptor, people] = userInput
                projectState.addProject(title, descriptor, people)
                this.clearInput()
            }
        }
    }
}