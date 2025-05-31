export const getAlquran = (setQuran) => {
    const url = "https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json";
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setQuran(data); // Memperbarui state setelah data diterima
            //console.log(data); // Menampilkan data di console
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
}

export const getSurah=(nomorSurah,setAyat)=>{
    const url = `https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${nomorSurah}.json`;
    
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        setAyat(data.verses);
        console.log(data); 
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));

}