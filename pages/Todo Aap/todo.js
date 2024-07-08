import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCzopToh8val4SXjmgELBvvZPvuTwVQz5g",
    authDomain: "todo-app-30228.firebaseapp.com",
    projectId: "todo-app-30228",
    storageBucket: "todo-app-30228.appspot.com",
    messagingSenderId: "595836119371",
    appId: "1:595836119371:web:0ebb8e6aa7020b2dbc20ce",
    measurementId: "G-TCZHPZZ9DE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const addbtnfux = async () => {
    const todotext = document.getElementById("todotext")
    const docRef = await addDoc(collection(db, "users"), {
        todos: todotext.value
    });
    location.reload()
}

const getData = async function () {
    const ullists = document.getElementById("ullists")
    const get = await getDocs(collection(db, "users"));
    get.forEach((item) => {
        console.log(item.data());
        ullists.innerHTML += `
                <li class="list-group-item">
                    ${item.data().todos}
                    <div class="btngroup">
                        <div class="btn" id="edit" onclick="window.editFux('${item.id}')">Edit</div>
                        <div class="btn" id="del" onclick = "window.delfux('${item.id}')">Del</div>
                    </div>
                </li>
        `
    })
}
getData()

async function delfux(id) {
    await deleteDoc(doc(db, "users", id));
    location.reload()
}

async function editFux(id) {

    const todotext = document.getElementById("todotext");
    const addbtn = document.getElementById("addbtn");
    const updatebtn = document.getElementById("updatebtn");

    addbtn.style.display = "none";
    updatebtn.style.display = "flex";

    const updateFux = async () => {
        const update = doc(db, "users", id);

        await updateDoc(update, {
            todos: todotext.value
        });

        updatebtn.style.display = "none";
        addbtn.style.display = "flex";
        todotext.value = "";
        location.reload()
        getData()

    }

    updatebtn.addEventListener("click", updateFux)
}

const gobackfux = () => {
    location.pathname = "/index.html"
}

const goback = document.getElementById("goback");
const addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", addbtnfux)
goback.addEventListener("click", gobackfux)

window.delfux = delfux;
window.editFux = editFux;





