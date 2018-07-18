import fetchJsonp from 'fetch-jsonp';

const petForm = document.querySelector('#pet-form');

petForm.addEventListener('submit',fetchAnimals);

//fetch animals from api
function fetchAnimals(e){
  e.preventDefault();

  //get user input
  // const userinput = document.querySelector('#inputInfo').value;
  // const inputInfo = document.querySelector('#device_id').value;

  const resultsnumber = document.querySelector('#resultsnumber').value;
  const url = 'https://randomapi.com/api/k9lkaclg?key=A78T-GPK4-ZTFX-Z2PN&results=${resultsnumber}'

  console.log(resultsnumber)
  fetch(url)
     .then(res => res.json())
     // .then(data => showAnimals(data.petfinder.pets.pet))
     .then(data => console.log(data))
     .catch(err => console.log(err));
}


//create function of showPet
function showPet(pets) {
  //to check all the data we get in console
  console.log(pets)

  //Find the html div block to display the results
  const results = document.querySelector('#results');
  //clear the html first
  results.innerHTML = '';
  //Loop Through the pets array we get in json
  pets.forEach((pet) =>{
    //create a div for the pet data
    const div = document.createElement('div');
    div.classList.add('card','card-body','mb-3');
    div.innerHTML = `
    <div class="row">
      <div class="col-sm-6">
        <h4>Data structure based on JSON object</h4>
        <p class="text-secondary"></p>
        <p> </p>

        <ul class="list-group">
          <li class="list-group-item">   </li>
        </ul>

      </div>
      <div class="col-sm-6">
        <img class="img-fluid rounded-circle mt-2" src="  ">
      </div>
    </div>
    `;

    results.appendChild(div);
  });

}
