document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert('Enter text!');
    }else{
        document.querySelector('#tasks').innerHTML += 
        `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        `;
        
        let deleteTask = document.querySelectorAll('.delete');
        for(let i = 0; i < deleteTask.length; i++){
            deleteTask[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        let tasks = document.querySelectorAll(".task");
        for(let i = 0; i < tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value = "";
    }
}