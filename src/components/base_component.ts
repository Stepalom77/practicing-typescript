namespace App {
    export abstract class Component<T extends HTMLElement, U extends HTMLElement>{
        templateElement:HTMLTemplateElement;
        hostElement:T
        element:U
        
    
        constructor(templeteId:string, hostElementId:string, insertAtStart:boolean, newElementId?:string){
            this.templateElement = document.getElementById(templeteId)! as HTMLTemplateElement
            this.hostElement = document.getElementById(hostElementId)! as T
    
            const importedHTMLContent = document.importNode(this.templateElement.content, true)
            this.element = importedHTMLContent.firstElementChild! as U
            if(newElementId){
                this.element.id = newElementId
            }
            this.attach(insertAtStart)
        }
    
        private attach(insertAtBeginning:boolean){
            this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element)
        }
    
        abstract configure():void
        abstract renderContent():void
    }
}