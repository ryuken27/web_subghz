/*
// Your web app's Firebase configuration
		// For Firebase JS SDK v7.20.0 and later, measurementId is optional
		const firebaseConfig = {
			apiKey: "AIzaSyBkX1ieE1j2bAbY33XiNojMEHzZyJEP5-w",
			authDomain: "bbbcc-22472.firebaseapp.com",
			databaseURL: "https://bbbcc-22472-default-rtdb.firebaseio.com",
			projectId: "bbbcc-22472",
			storageBucket: "bbbcc-22472.appspot.com",
			messagingSenderId: "670082950114",
			appId: "1:670082950114:web:5c5b46f9ec3f39ee884fbb",
			measurementId: "G-M3KYQY0F66"
		};

		// Initialize Firebase
		
		const app = initializeApp(firebaseConfig);
		const analytics = getAnalytics(app);
				
				//Copy and Paste the URL from near the top of the CDN you pasted in from firebase
				// (the one where you imported "initializeApp" from),
				//but change "firebase-app" to "firebase-database"
				//firebase.initializeApp(firebaseConfig);
				//var database = firebase.database();
				const db = getDatabase();
		
				var enterID = document.querySelector("#CV1");
				//var enterName = document.querySelector("#enterName");
				//var enterAge = document.querySelector("#enterAge");
				//var findID = document.querySelector("#findID");
				//var findName = document.querySelector("#findName");
				//var findAge = document.querySelector("#findAge");
			  
				var insertBtn = document.querySelector("#send");
				//var updateBtn = document.querySelector("#update");
				//var removeBtn = document.querySelector("#remove");
				//var findBtn = document.querySelector("#find");
		
				function wirteData() {
					set(ref(db, "DATA2/"),{
						
						CV: CV1.value,
						
					})
					.then(()=>{
						alert("Data added successfully");
					})
					.catch((error)=>{
						alert(error);
					});
				}
		
				insertBtn.addEventListener('click', wirteData);
	
				/*
				var valueTemp = firebase.database().ref('DATA').child('CV');
				valueTemp.on('value',snap =>{
				//console.log("nhiet do : " + snap.val());
				document.getElementById("PV1").innerHTML=snap.val()+" C";
				});
				
				
				*/
			//
				 
				
			
				/*
				function readdata(){
				
					const dt = getDatabase();
					const starCountRef = ref(dt, 'DATA1/'+ PV );
					onValue(starCountRef, (snapshot) => {
					const data = snapshot.val().PV;
					//updateStarCount(postElement, data);
					const starCountContainer = document.querySelector('giatri');
  					starCountContainer.innerHTML = data;
					});
				
				}

				
				// xoa tu day
				const dd = getDatabase();

				var enterID = document.querySelector("#enterID");
				var enterName = document.querySelector("#enterName");
				var enterAge = document.querySelector("#enterAge");
				var findID = document.querySelector("#findID");
				var findName = document.querySelector("#findName");
				var findAge = document.querySelector("#findAge");


				var insertBtn = document.querySelector("#insert");
				var findBtn = document.querySelector("#find");

				function InsertData() {
					set(ref(dd, "People/"+ enterID.value),{
						Name: enterName.value,
						ID: enterID.value,
						Age: enterAge.value
					})
					.then(()=>{
						alert("Data added successfully");
					})
					.catch((error)=>{
						alert(error);
					});
				}

				function FindData() {
					const dbref = ref(dd);

					get(child(dbref, "People/" + findID.value))
					.then((snapshot)=>{
						if(snapshot.exists()){
							findName.innerHTML = "Name: " + snapshot.val().Name;
							findAge.innerHTML = "Age: " + snapshot.val().Age;
						} else {
							alert("No data found");
						}
					})
					.catch((error)=>{
						alert(error)
					})
					
				}

				insertBtn.addEventListener('click', InsertData);
				findBtn.addEventListener('click', FindData);
                */