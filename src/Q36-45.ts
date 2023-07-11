// Q.36
const makeShirt = (size: string, message: string) => {
    console.log(`Size: ${size} \tMessage: ${message}`)
}

makeShirt("Medium", "Coding is life")

// Q.37
makeShirt("Large", "I love Typescript");
makeShirt("Medium", "I love Typescript");


// Q.39
console.log("\n")
const cityCountry = (city: string, country: string) => {
    console.log(`"${city}, ${country}"`)
}

cityCountry("Karachi", "Pakistan")
cityCountry("Sydney", "Australia")
cityCountry("Los Angeles", "America")


// Q.40
console.log("\n")
const make_album = (artist: string, title: string) => {
    return {
        artist,
        title
    }
}
const albumObj = make_album("AtifAslam", "Adat");
console.log(albumObj);

// Q.41
console.log("\n")
const magicians: string[] = ["Abra", "Kazam", "Doofen"];

const show_magicians = (magics: string[]) => {
    magics.map(item => console.log(item));
}

show_magicians(magicians);



// Q.42
console.log("\n")
const make_great = (magics: string[], message: string) => {
    magics.map(item => console.log(`${message} ${item}`));
}
make_great(magicians, "The Great");


// Q.45
console.log("\n")
const cars = (manufacturer: string, model: string, color: string) => {
    return {
        manufacturer,
        model,
        color
    }
}
const carObj = cars("Honda", "City", "Black");
console.log(carObj)