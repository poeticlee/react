
import City from './city';

function cities() {


   
  
  const cities = [
    {
      id: 1,
      name: "Abuja",
      country: "Nigeria",
      image: "africana3.jpg",
      about: "Abuja became Nigeria's capital in 1991, replacing Lagos. It's known for its modern architecture, including Aso Rock and the Nigerian Presidential Complex."
    },
    {
      id: 2,
      name: "London",
      country: "UK",
      image: "africana4.jpg",
      about: "London, founded by the Romans in 43 AD, is known for landmarks such as the Tower of London and Buckingham Palace. It has a rich history dating back over 2,000 years."
    },
    {
      id: 3,
      name: "Tokyo",
      country: "Japan",
      image: "africana5.jpeg",
      about: "Originally a small fishing village named Edo, Tokyo became Japan's capital in 1868. It's now one of the world's most populous cities and a major global financial center."
    },
    {
      id: 4,
      name: "Paris",
      country: "France",
      image: "africana6.jpg",
      about: "Known as 'The City of Light,' Paris was founded in the 3rd century BC by a Celtic tribe called the Parisii. It's famous for its influence on art, culture, and fashion."
    },
    {
      id: 5,
      name: "Sydney",
      country: "Australia",
      image: "party1.jpeg",
      about: "Sydney was founded in 1788 as a penal colony by the British. Today, it's known for its iconic Sydney Opera House and beautiful harbour."
    },
    {
      id: 6,
      name: "Dubai",
      country: "UAE",
      image: "party2.jpeg",
      about: "Once a small fishing and pearl-diving village, Dubai's rapid transformation began in the 1960s with the discovery of oil. Now, it's famous for its futuristic skyscrapers and luxury lifestyle."
    },
    {
      id: 7,
      name: "Singapore",
      country: "Singapore",
      image: "party3.jpeg",
      about: "Founded in 1819 as a British trading colony, Singapore became a fully independent republic in 1965. It's now a global financial hub known for its strict laws and cleanliness."
    },
    {
      id: 8,
      name: "Hong Kong",
      country: "China",
      image: "party4.jpg",
      about: "Hong Kong became a British colony in 1842 and was handed back to China in 1997. It has a unique blend of Eastern and Western cultures, and is a major global financial center for all ."
    },
    {
      id: 9,
      name: "Los Angeles",
      country: "USA",
      image: "party5.webp",
      about: "Los Angeles was founded in 1781 and became a part of the United States in 1848. It's known for its entertainment industry, especially Hollywood, the global center of film and television."
    },
    {
      id: 10,
      name: "Berlin",
      country: "Germany",
      image: "wisdom1.jpg",
      about: "Berlin, founded in the 13th century, played a pivotal role in World War II and the Cold War. It’s now known for its rich history, museums, and cultural diversity."
    },
    {
      id: 11,
      name: "Rome",
      country: "Italy",
      image: "wisdom2.jpg",
      about: "Rome, founded in 753 BC, is the capital of Italy and was once the heart of the Roman Empire. It's famous for its ancient landmarks like the Colosseum and Vatican City."
    },
    {
      id: 12,
      name: "Cape Town",
      country: "South Africa",
      image: "wisdom3.jpeg",
      about: "Cape Town, established in 1652 as a supply station by the Dutch East India Company, is known for its Table Mountain and its role in South Africa’s apartheid history."
    }
  ]
 
 const cityList =cities.map(city =><City key={city.id} city={city} />)
  return (
    <div style={gridder}>
        {cityList}
    </div>
  )
}
const gridder ={

  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px'
  }
export default cities