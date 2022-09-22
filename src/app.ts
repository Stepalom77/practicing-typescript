/*///<reference path="components/project_input.ts" />
///<reference path="components/project_item.ts" />
///<reference path="components/project_list.ts" />*/
import { ProjectInput } from "./components/project_input"
import { ProjectList } from "./components/project_list"
 
    const projectInput = new ProjectInput()
    const activeProjectList = new ProjectList('active')
    const finishedProjectList = new ProjectList('finished')


