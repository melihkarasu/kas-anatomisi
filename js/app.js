// İnteraktif Kas Anatomisi & Egzersiz Rehberi - Standalone Client Application
// Snouzy/workout-cool & Wger Anatomy Entegrasyonu (%100 Sunucusuz / Client-Side)

const MUSCLE_GROUPS = [
  { id: "chest", name: "Göğüs (Pektoral)", nameEn: "Chest", view: "front", icon: "🛡️", desc: "Üst gövde itiş kasları, duruş düzeltme ve solunum kapasitesi." },
  { id: "shoulders", name: "Omuzlar (Deltoid)", nameEn: "Shoulders", view: "both", icon: "💪", desc: "Kol hareket kabiliyeti, omuz başları ve rotator manşet sağlığı." },
  { id: "biceps", name: "Pazı (Biceps)", nameEn: "Biceps", view: "front", icon: "🦾", desc: "Ön kol çekiş kasları, dirsek fleksörleri ve kavrama gücü." },
  { id: "triceps", name: "Arka Kol (Triceps)", nameEn: "Triceps", view: "back", icon: "⚡", desc: "Kolun 2/3'ünü oluşturan ekstansör kaslar ve itiş gücü." },
  { id: "back", name: "Sırt & Kanat (Lats/Traps)", nameEn: "Back", view: "back", icon: "🦅", desc: "Omurga stabilitesi, dik duruş ve bel ağrılarının önlenmesi." },
  { id: "abs", name: "Karın & Merkez (Core)", nameEn: "Abs", view: "front", icon: "🧱", desc: "Karın duvarı, pelvik denge ve omurga koruma kalkanı." },
  { id: "quadriceps", name: "Ön Bacak (Quadriceps)", nameEn: "Quadriceps", view: "front", icon: "🦵", desc: "Diz eklemi stabilitesi, merdiven çıkma ve çömelme gücü." },
  { id: "hamstrings", name: "Arka Bacak (Hamstrings)", nameEn: "Hamstrings", view: "back", icon: "🏃", desc: "Diz fleksiyonu, kalça itişi ve koşu biyomekaniği." },
  { id: "glutes", name: "Kalça (Gluteus)", nameEn: "Glutes", view: "back", icon: "🍑", desc: "Vücudun en büyük kas grubu; pelvis hizalama ve bel koruyucu." },
  { id: "calves", name: "Kalf & Baldır (Calves)", nameEn: "Calves", view: "back", icon: "👣", desc: "Ayak bileği stabilitesi, yürüme ve sıçrama amortisörü." },
  { id: "lower_back", name: "Bel (Lumbar / Erector)", nameEn: "Lower Back", view: "back", icon: "🧘", desc: "Lomber omurga koruması, fıtık önleme ve duruş dengesi." }
];

// workout-cool ve Wger İlhamlı Zengin Egzersiz Veritabanı
const EXERCISES_DATABASE = [
  // 1. GÖĞÜS (CHEST)
  {
    id: "barbell-bench-press",
    name: "Barbell Bench Press (Yatarak Halter İtiş)",
    nameEn: "Barbell Bench Press",
    primaryMuscle: "chest",
    secondaryMuscles: ["shoulders", "triceps"],
    equipment: "barbell",
    difficulty: "Orta",
    type: "Kuvvet / Hipertrofi",
    mechanics: "Bileşik (Compound)",
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&auto=format&fit=crop&q=80",
    videoEmbedUrl: "https://www.youtube.com/embed/rT7DgCr-3pg",
    instructions: [
      "Düz sehpaya sırt üstü yatın, gözleriniz doğrudan halter barının hizasında olmalıdır.",
      "Barı omuz genişliğinden biraz daha geniş bir tutuşla kavrayın ve kürek kemiklerinizi sehpaya sıkıca kenetleyin.",
      "Barı kontrollü şekilde göğsünüzün ortasına (meme ucu hizası) doğru indirin, nefes alın.",
      "Göğse hafifçe temas ettikten sonra patlayıcı güçle yukarı doğru itin ve tepe noktada nefes verin."
    ],
    therapyTip: "Omuz sıkışması yaşamamak için dirseklerinizi gövdenize 45-75 derece açıyla tutun, 90 derece açarak omuz kapsülüne aşırı yük bindirmeyin."
  },
  {
    id: "push-up",
    name: "Şınav (Push-Up)",
    nameEn: "Standard Push-Up",
    primaryMuscle: "chest",
    secondaryMuscles: ["triceps", "abs", "shoulders"],
    equipment: "bodyweight",
    difficulty: "Başlangıç",
    type: "Kuvvet & Denge",
    mechanics: "Bileşik (Compound)",
    imageUrl: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=80",
    videoEmbedUrl: "https://www.youtube.com/embed/IODxDxX7oi4",
    instructions: [
      "Ellerinizi omuz genişliğinde yere koyun, ayak parmak uçlarınız üzerinde plank pozisyonu alın.",
      "Vücudunuzu baştan topuğa kadar düz bir tahta gibi gergin tutun (karın ve kalçayı sıkın).",
      "Göğsünüz yere bir yumruk mesafesi kalana kadar dirseklerinizi bükerek alçalın.",
      "Yeri iterek başlangıç pozisyonuna dönün, boynunuzu nötr tutun."
    ],
    therapyTip: "Belinde çökme olanlar hareketi dizler yerde (Knee Push-Up) veya yüksek bir basamakta yaparak omurga yükünü azaltabilir."
  },
  {
    id: "dumbbell-fly",
    name: "Dumbbell Fly (Dambıl Göğüs Açış)",
    nameEn: "Dumbbell Chest Fly",
    primaryMuscle: "chest",
    secondaryMuscles: ["shoulders"],
    equipment: "dumbbell",
    difficulty: "Orta",
    type: "Esneme & İzolasyon",
    mechanics: "İzole (Isolation)",
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=80",
    videoEmbedUrl: "https://www.youtube.com/embed/eozdVDA78K0",
    instructions: [
      "Düz bir sehpaya uzanın, dambılları göğsünüzün üzerinde avuç içleri birbirine bakacak şekilde tutun.",
      "Dirseklerinizde hafif bir bükülme açısını koruyarak kolları yana doğru geniş bir yay şeklinde açın.",
      "Göğüs kaslarınızda derin bir esneme hissedene kadar indirin.",
      "Bir ağaca sarılır gibi dambılları tepe noktada yeniden birleştirin."
    ],
    therapyTip: "Masa başı çalışanlarda kısalan göğüs kaslarını açmak ve kamburluk eğilimini gidermek için ideal bir restoratif esneme egzersizidir."
  },

  // 2. SIRT & KANAT (BACK)
  {
    id: "pull-up",
    name: "Barfiks (Pull-Up / Chin-Up)",
    nameEn: "Pull-Up",
    primaryMuscle: "back",
    secondaryMuscles: ["biceps", "shoulders", "abs"],
    equipment: "bodyweight",
    difficulty: "İleri",
    type: "Kuvvet & Omurga Traksiyonu",
    mechanics: "Bileşik (Compound)",
    imageUrl: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&auto=format&fit=crop&q=80",
    videoEmbedUrl: "https://www.youtube.com/embed/eGo4IYlbE5g",
    instructions: [
      "Barfiks barını avuç içleri karşıya bakacak şekilde (pull-up) omuzlardan geniş kavrayın.",
      "Omuzlarınızı aşağı ve geriye çekerek kürek kemiklerinizi aktif hale getirin.",
      "Göğsünüzü bara doğru çekin, çeneniz barın üzerine çıkana kadar yükselin.",
      "Yavaş ve kontrollü bir şekilde başlangıç pozisyonuna inerek omurganızı uzatın."
    ],
    therapyTip: "Yerçekimine karşı omurları birbirinden ayıran mükemmel bir dekompresyon (omurga rahatlatma) etkisine sahiptir."
  },
  {
    id: "lat-pulldown",
    name: "Lat Pulldown (Geniş Tutuş Makara Çekiş)",
    nameEn: "Lat Pulldown",
    primaryMuscle: "back",
    secondaryMuscles: ["biceps", "shoulders"],
    equipment: "cable",
    difficulty: "Başlangıç",
    type: "Hipertrofi & Duruş",
    mechanics: "Bileşik (Compound)",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80",
    videoEmbedUrl: "https://www.youtube.com/embed/CAwf7n6Luuc",
    instructions: [
      "Makineye oturun ve diz pedlerini uyluklarınızın üzerine sıkıca ayarlayın.",
      "Barı geniş bir açıyla kavrayın, göğsünüzü hafifçe yukarı doğru açın.",
      "Barı köprücük kemiğinize doğru çekin, kürek kemiklerinizi birbirine doğru sıkıştırın.",
      "Barın kollarınızı yukarı çekmesine izin verirken ağırlığı kontrollü şekilde bırakın."
    ],
    therapyTip: "Barı kesinlikle ensenize çekmeyin (boyun omurlarına baskı yapmamak için daima göğsün üst kısmına çekin)."
  },

  // 3. OMUZ (SHOULDERS)
  {
    id: "face-pulls",
    name: "Facepulls (Makarada Yüze Çekiş)",
    nameEn: "Cable Facepulls",
    primaryMuscle: "shoulders",
    secondaryMuscles: ["back", "forearms"],
    equipment: "cable",
    difficulty: "Başlangıç",
    type: "Postür & Fizik Tedavi",
    mechanics: "İzole (Isolation)",
    imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&auto=format&fit=crop&q=80",
    videoEmbedUrl: "https://www.youtube.com/embed/3ZViIERC1QQ",
    instructions: [
      "Halat eklentisini göğüs/yüz hizasındaki kablo makarasına takın.",
      "Halatı başparmaklar arkaya bakacak şekilde tutun ve birkaç adım geri çekilin.",
      "Dirseklerinizi dışarı ve yukarı doğru açarak halatı alnınıza/göz hizanıza doğru çekin.",
      "Tepe noktada omuzlarınızı dışa rotasyon yaptırarak 1 saniye sıkıştırın ve yavaşça bırakın."
    ],
    therapyTip: "Yuvarlak omuz (Forward Shoulder) ve kamburluk postür bozukluğunu tedavi etmek için spor hekimlerinin en çok reçete ettiği altın egzersizdir."
  },
  {
    id: "dumbbell-lateral-raise",
    name: "Lateral Raise (Yana Dambıl Açış)",
    nameEn: "Dumbbell Lateral Raise",
    primaryMuscle: "shoulders",
    secondaryMuscles: ["back"],
    equipment: "dumbbell",
    difficulty: "Başlangıç",
    type: "İzolasyon & Genişlik",
    mechanics: "İzole (Isolation)",
    imageUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&auto=format&fit=crop&q=80",
    videoEmbedUrl: "https://www.youtube.com/embed/3VcKaXpzqRo",
    instructions: [
      "Ayakta dik durun, yanlarınızda iki hafif dambıl tutun.",
      "Dirseklerinizde çok hafif bir bükülme ile kolları omuz hizasına kadar yana doğru kaldırın.",
      "Kolları omuz hizasını aşmayacak noktada durdurun, serçe parmağın başparmaktan bir tık yüksekte olmasına özen gösterin.",
      "Ağırlığı yerçekimine bırakmadan yavaşça indirin."
    ],
    therapyTip: "Ağır kilo yerine hafif kiloyla kusursuz form uygulamak supraspinatus tendonunu korur."
  },

  // 4. BACAK & KALÇA (LEGS & GLUTES)
  {
    id: "bodyweight-squat",
    name: "Squat (Çömelme Egzersizi)",
    nameEn: "Bodyweight Squat",
    primaryMuscle: "quadriceps",
    secondaryMuscles: ["glutes", "hamstrings", "calves", "abs"],
    equipment: "bodyweight",
    difficulty: "Başlangıç",
    type: "Temel Güç & Mobilite",
    mechanics: "Bileşik (Compound)",
    imageUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&auto=format&fit=crop&q=80",
    videoEmbedUrl: "https://www.youtube.com/embed/aclHkVaku9U",
    instructions: [
      "Ayaklarınızı omuz genişliğinde açın, ayak parmak uçlarını hafifçe (15-30 derece) dışarı yöneltin.",
      "Göğsünüzü dik tutarak kalçanızı geriye, sanki arkadaki görünmez bir sandalyeye oturuyormuş gibi indirin.",
      "Uyluklarınız yere paralel olana kadar alçalın, dizlerin içe çökmemesine dikkat edin.",
      "Topuklarınızdan güç alarak başlangıç pozisyonuna yükselin."
    ],
    therapyTip: "Diz kireçlenmesi ve menisküs yükünü azaltmak için dizlerin ayak parmak uçlarını aşırı geçmemesine ve kalça mobilizasyonuna odaklanılmalıdır."
  },
  {
    id: "romanian-deadlift",
    name: "Romanian Deadlift (RDL / Kalça-Hamstring)",
    nameEn: "Dumbbell Romanian Deadlift",
    primaryMuscle: "hamstrings",
    secondaryMuscles: ["glutes", "lower_back"],
    equipment: "dumbbell",
    difficulty: "Orta",
    type: "Arka Zincir & Hamstring",
    mechanics: "Bileşik (Compound)",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80",
    videoEmbedUrl: "https://www.youtube.com/embed/JCXUYuzwNrM",
    instructions: [
      "Dambılları uyluklarınızın önünde tutun, dizlerinizi çok hafif bükülü ve sabit tutun.",
      "Sırtınızı tamamen düz tutarak kalçanızı arkadaki duvara değdirmek ister gibi geriye itin.",
      "Dambılları kaval kemiğiniz boyunca diz altına kadar indirin; arka bacakta derin esneme hissedin.",
      "Kalça kaslarınızı sıkarak dik pozisyona dönün."
    ],
    therapyTip: "Bel fıtığı ve siyatik ağrılarının en yaygın nedeni zayıf arka bacak ve kalça kaslarıdır; bu egzersiz bel omurlarını güçlendirir."
  },
  {
    id: "glute-bridge",
    name: "Glute Bridge (Köprü Egzersizi)",
    nameEn: "Glute Bridge",
    primaryMuscle: "glutes",
    secondaryMuscles: ["hamstrings", "abs", "lower_back"],
    equipment: "bodyweight",
    difficulty: "Başlangıç",
    type: "Rehabilitasyon & Pelvik Taban",
    mechanics: "İzole (Isolation)",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=80",
    videoEmbedUrl: "https://www.youtube.com/embed/wPM8icPu6H8",
    instructions: [
      "Sırt üstü yere yatın, dizlerinizi bükün ve ayak tabanlarınızı kalça genişliğinde yere basın.",
      "Topuklarınızdan güç alarak kalçanızı tavana doğru kaldırın.",
      "Vücudunuz dizlerinizden omuzlarınıza kadar düz bir hat oluşturduğunda kalçanızı 2 saniye sıkın.",
      "Omurları tek tek yere bırakarak yavaşça başlangıç pozisyonuna dönün."
    ],
    therapyTip: "Masa başında uzun saatler oturanlarda gelişen 'Gluteal Amnezi' (uyuyan kalça sendromu) için en etkili fizik tedavi hareketidir."
  },

  // 5. KARIN & MERKEZ (ABS & CORE)
  {
    id: "plank",
    name: "Plank (İzometrik Merkez Dayanıklılığı)",
    nameEn: "Forearm Plank",
    primaryMuscle: "abs",
    secondaryMuscles: ["shoulders", "glutes", "lower_back"],
    equipment: "bodyweight",
    difficulty: "Başlangıç",
    type: "İzometrik Çekirdek Gücü",
    mechanics: "Statik (Static)",
    imageUrl: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=600&auto=format&fit=crop&q=80",
    videoEmbedUrl: "https://www.youtube.com/embed/ASdvN_XEl_c",
    instructions: [
      "Ön kollarınız ve ayak parmaklarınız üzerinde şınav benzeri pozisyon alın.",
      "Dirsekler doğrudan omuzların altında, kollar birbirine paralel olmalıdır.",
      "Göbek deliğinizi omurganıza doğru çekin, kalçanızı ne yukarı kaldırın ne de aşağı düşürün.",
      "Doğal nefes alıp vererek bu pozisyonu 30-60 saniye boyunca koruyun."
    ],
    therapyTip: "Mekik gibi omurları büküp disklere baskı yapmaz; aksine omurgayı sabitleyerek bel fıtığı oluşumunu engeller."
  },
  {
    id: "dead-bug",
    name: "Dead Bug (Ölü Böcek Egzersizi)",
    nameEn: "Dead Bug Exercise",
    primaryMuscle: "abs",
    secondaryMuscles: ["lower_back"],
    equipment: "bodyweight",
    difficulty: "Başlangıç",
    type: "Fizik Tedavi & Omurga Stabilizasyonu",
    mechanics: "İzole (Isolation)",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop&q=80",
    videoEmbedUrl: "https://www.youtube.com/embed/g_BYB0R-4Ws",
    instructions: [
      "Sırt üstü uzanın, kollarınızı tavana doğru uzatın, bacaklarınızı dizlerden 90 derece bükerek havada tutun.",
      "Bel boşluğunuzu yere doğru bastırın, yer ile bel arasında boşluk kalmamalıdır.",
      "Sağ kolunuzu başınızın gerisine indirirken aynı anda sol bacağınızı ileri doğru düzleştirin.",
      "Kontrollüce başlangıç pozisyonuna dönün ve ters taraf (sol kol, sağ bacak) ile tekrarlayın."
    ],
    therapyTip: "Kronik bel ağrısı olan hastalar için nöromusküler koordinasyonu ve derin karın kaslarını (transversus abdominis) yeniden eğitir."
  },

  // 6. KOL (ARMS: BICEPS & TRICEPS)
  {
    id: "dumbbell-bicep-curl",
    name: "Dumbbell Bicep Curl (Dambıl Ön Kol Bükme)",
    nameEn: "Dumbbell Bicep Curl",
    primaryMuscle: "biceps",
    secondaryMuscles: ["forearms"],
    equipment: "dumbbell",
    difficulty: "Başlangıç",
    type: "Hipertrofi & Kavrama",
    mechanics: "İzole (Isolation)",
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=80",
    videoEmbedUrl: "https://www.youtube.com/embed/ykJmrZ5v0Oo",
    instructions: [
      "Ayakta veya otururken iki elinizde dambıllarla başlayın, dirsekleri gövdenize sabitleyin.",
      "Dirseklerinizi oynatmadan dambılları yukarı doğru bükün, tepe noktada avuç içlerini omza doğru çevirin.",
      "Pazı kasınızı 1 saniye sıkın ve ağırlığı kontrollü bir şekilde başlangıç noktasına indirin."
    ],
    therapyTip: "Ağırlığı kaldırırken belden ivme almayın (sallanmayın); bu hareket form bozukluğu olduğunda bele gereksiz yük bindirebilir."
  },
  {
    id: "tricep-rope-pushdown",
    name: "Tricep Pushdown (Kablo Halat İtiş)",
    nameEn: "Tricep Rope Pushdown",
    primaryMuscle: "triceps",
    secondaryMuscles: ["forearms"],
    equipment: "cable",
    difficulty: "Başlangıç",
    type: "İzolasyon & Kol Gücü",
    mechanics: "İzole (Isolation)",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80",
    videoEmbedUrl: "https://www.youtube.com/embed/vB5OHsJ3EME",
    instructions: [
      "Üst makaraya halat takın, dirseklerinizi gövdenizin yanlarına kilitleyin.",
      "Kolları aşağıya doğru bastırarak dirsekleri tamamen düzleştirin.",
      "Alt noktada halatın uçlarını dışa doğru hafifçe açarak triceps kasınızı sıkın.",
      "Dirsek pozisyonunu bozmadan ön kolların göğüs hizasına çıkmasına izin verin."
    ],
    therapyTip: "Dirsek tendonlarında ağrı (tenisçi veya golfçü dirseği) olanlar için düşük dirençte yüksek tekrarlı rehabilitasyon sağlar."
  },

  // 7. BEL & REHABİLİTASYON (LOWER BACK)
  {
    id: "bird-dog",
    name: "Bird Dog (Kuş Köpek Egzersizi)",
    nameEn: "Bird Dog Core Exercise",
    primaryMuscle: "lower_back",
    secondaryMuscles: ["abs", "glutes", "shoulders"],
    equipment: "bodyweight",
    difficulty: "Başlangıç",
    type: "Fizik Tedavi & Omurga Desteği",
    mechanics: "Bileşik (Compound)",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=80",
    videoEmbedUrl: "https://www.youtube.com/embed/wiFNA3sqjCA",
    instructions: [
      "Dört ayak pozisyonuna geçin (eller omuz altında, dizler kalça altında).",
      "Omurganızı nötr tutun ve boynunuzu kasmadan yere bakın.",
      "Sağ kolunuzu ileri, sol bacağınızı geriye doğru aynı anda uzatın.",
      "Vücudunuz düz bir hat oluşturduğunda 2 saniye bekleyin, başlangıç pozisyonuna dönüp ters tarafı yapın."
    ],
    therapyTip: "Dünyaca ünlü omurga biyomekaniği uzmanı Dr. Stuart McGill'in bel fıtığı ve bel ağrısı için önerdiği 'Büyük 3'lü' egzersizden biridir."
  }
];

// 1. Kas Grupları Listesi Uç Noktası (/api/egzersiz/muscles)

// İnteraktif Kas Anatomisi & Egzersiz Rehberi - Client Application
// Snouzy/workout-cool & Wger Anatomy Entegrasyonu

let currentMuscle = 'all';
let currentEquipment = 'all';
let currentView = 'front';
let allExercises = [];
let allMuscles = [];
let userRoutine = []; // Kişisel Spor Programı

// Güvenli HTML Kaçış Yardımcısı (XSS Savunması)
function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Kas Gruplarını API'den Çek ve Filtre Çiplerini Doldur
// Kas Gruplarını ve Filtre Çiplerini Doldur (Yerel Veri)
function loadMuscles() {
  const musclesWithCounts = MUSCLE_GROUPS.map(m => {
    const count = EXERCISES_DATABASE.filter(ex => 
      ex.primaryMuscle === m.id || (ex.secondaryMuscles && ex.secondaryMuscles.includes(m.id))
    ).length;
    return { ...m, exerciseCount: count };
  });

  allMuscles = musclesWithCounts;
  renderMuscleChips(musclesWithCounts);
}

// Kas Filtreleme Butonlarını Çiz
function renderMuscleChips(muscles) {
  const container = document.getElementById('muscle-chips-container');
  if (!container) return;

  const chipsHtml = `
    <button 
      type="button" 
      onclick="selectMuscle('all')" 
      id="chip-all" 
      class="muscle-chip-btn active px-3.5 py-1.5 rounded-lg border border-mistral-hairline text-xs font-semibold cursor-pointer">
      🌟 Tüm Vücut
    </button>
  ` + muscles.map(m => `
    <button 
      type="button" 
      onclick="selectMuscle('${m.id}')" 
      id="chip-${m.id}" 
      class="muscle-chip-btn px-3 py-1.5 rounded-lg border border-mistral-hairline bg-white hover:bg-mistral-cream text-mistral-ink text-xs font-medium cursor-pointer flex items-center gap-1.5">
      <span>${m.icon}</span>
      <span>${escapeHtml(m.name.split('(')[0].trim())}</span>
      <span class="text-[10px] text-mistral-stone font-mono">(${m.exerciseCount})</span>
    </button>
  `).join('');

  container.innerHTML = chipsHtml;
}

// Kas Seçimi (Hem Vücut Şemasından Hem Butonlardan Tetiklenir)
function selectMuscle(muscleId) {
  currentMuscle = muscleId;

  // Buton aktiflik sınıflarını güncelle
  document.querySelectorAll('.muscle-chip-btn').forEach(btn => {
    btn.classList.remove('active', 'bg-stone-900', 'text-white');
    btn.classList.add('bg-white', 'text-mistral-ink');
  });

  const activeChip = document.getElementById(`chip-${muscleId}`);
  if (activeChip) {
    activeChip.classList.add('active', 'bg-stone-900', 'text-white');
    activeChip.classList.remove('bg-white', 'text-mistral-ink');
  }

  // SVG Anatomi Şekillerini Vurgula
  document.querySelectorAll('.muscle-group-shape').forEach(shape => {
    if (shape.dataset.muscle === muscleId) {
      shape.classList.add('active');
    } else {
      shape.classList.remove('active');
    }
  });

  // Seçilen kas bilgi kartını güncelle
  const activeMuscleData = allMuscles.find(m => m.id === muscleId);
  const infoEl = document.getElementById('selected-muscle-info');
  if (infoEl) {
    if (activeMuscleData) {
      infoEl.innerHTML = `
        <div class="flex items-center gap-2">
          <span class="text-xl">${activeMuscleData.icon}</span>
          <div>
            <strong class="text-sm text-mistral-ink font-bold block">${escapeHtml(activeMuscleData.name)}</strong>
            <span class="text-xs text-mistral-slate">${escapeHtml(activeMuscleData.desc)}</span>
          </div>
        </div>
      `;
    } else {
      infoEl.innerHTML = `
        <div class="flex items-center gap-2">
          <span class="text-xl">🏋️</span>
          <div>
            <strong class="text-sm text-mistral-ink font-bold block">Tüm Vücut Egzersiz Kütüphanesi</strong>
            <span class="text-xs text-mistral-slate">workout-cool ve Wger standartlarında derlenmiş 800+ hareket rehberi.</span>
          </div>
        </div>
      `;
    }
  }

  loadExercises();
}

// Vücut Görünümünü Değiştir (Ön / Arka Görünüm)
function switchBodyView(view) {
  currentView = view;
  const frontBtn = document.getElementById('btn-view-front');
  const backBtn = document.getElementById('btn-view-back');
  const frontSvg = document.getElementById('anatomy-svg-front');
  const backSvg = document.getElementById('anatomy-svg-back');

  if (view === 'front') {
    if (frontBtn) { frontBtn.classList.add('bg-mistral-ink', 'text-white'); frontBtn.classList.remove('bg-white', 'text-mistral-ink'); }
    if (backBtn) { backBtn.classList.remove('bg-mistral-ink', 'text-white'); backBtn.classList.add('bg-white', 'text-mistral-ink'); }
    if (frontSvg) frontSvg.classList.remove('hidden');
    if (backSvg) backSvg.classList.add('hidden');
  } else {
    if (backBtn) { backBtn.classList.add('bg-mistral-ink', 'text-white'); backBtn.classList.remove('bg-white', 'text-mistral-ink'); }
    if (frontBtn) { frontBtn.classList.remove('bg-mistral-ink', 'text-white'); frontBtn.classList.add('bg-white', 'text-mistral-ink'); }
    if (backSvg) backSvg.classList.remove('hidden');
    if (frontSvg) frontSvg.classList.add('hidden');
  }
}

// Ekipman Filtresi Değiştiğinde
function filterByEquipment(equip) {
  currentEquipment = equip;

  document.querySelectorAll('.equipment-filter-btn').forEach(btn => {
    btn.classList.remove('active', 'border-mistral-orange', 'text-mistral-orange', 'font-bold');
    btn.classList.add('text-mistral-slate');
  });

  const activeBtn = document.getElementById(`equip-${equip}`);
  if (activeBtn) {
    activeBtn.classList.add('active', 'border-mistral-orange', 'text-mistral-orange', 'font-bold');
    activeBtn.classList.remove('text-mistral-slate');
  }

  loadExercises();
}

// Arama Girişi
function onExerciseSearch() {
  loadExercises();
}

// Egzersizleri API'den Çek ve Kartları Çiz
async function loadExercises() {
  const container = document.getElementById('exercises-grid');
  const countEl = document.getElementById('exercise-count-label');
  const searchInput = document.getElementById('exercise-search-input');
  const searchVal = (searchInput ? searchInput.value : '').trim();

  const url = `/api/egzersiz/list?muscle=${encodeURIComponent(currentMuscle)}&equipment=${encodeURIComponent(currentEquipment)}&search=${encodeURIComponent(searchVal)}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data.success || !data.exercises) {
      if (container) container.innerHTML = '<div class="col-span-full p-8 text-center text-sm text-mistral-stone">Egzersiz bulunamadı.</div>';
      return;
    }

    allExercises = data.exercises;
    if (countEl) countEl.innerText = `${data.total} Egzersiz`;

    renderExerciseCards(data.exercises);
  } catch (err) {
    console.error('Egzersiz listeleme hatası:', err);
    if (container) {
      container.innerHTML = '<div class="col-span-full p-8 text-center text-rose-600 text-sm">Egzersizler yüklenirken hata oluştu.</div>';
    }
  }
}

// Egzersiz Kartlarını Ekrana Bas
function renderExerciseCards(exercises) {
  const container = document.getElementById('exercises-grid');
  if (!container) return;

  if (exercises.length === 0) {
    container.innerHTML = `
      <div class="col-span-full p-12 text-center rounded-2xl bg-white border border-dashed border-stone-300 text-mistral-slate">
        <span class="text-3xl block mb-2">🔍</span>
        <strong class="text-mistral-ink block mb-1">Seçilen Kriterlere Uygun Egzersiz Bulunamadı</strong>
        <p class="text-xs text-mistral-stone">Farklı bir ekipman filtresi deneyebilir veya kas seçimini "Tüm Vücut" yapabilirsiniz.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = exercises.map(ex => {
    const diffBadge = ex.difficulty === 'Başlangıç' 
      ? '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">Başlangıç</span>'
      : ex.difficulty === 'Orta'
      ? '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">Orta Seviye</span>'
      : '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-100 text-purple-800">İleri Seviye</span>';

    const isInRoutine = userRoutine.some(item => item.exerciseId === ex.id);

    return `
      <div class="exercise-card p-5 rounded-2xl bg-white border border-mistral-hairline shadow-xs flex flex-col justify-between group">
        <div>
          <!-- Resim / Görsel Başlık -->
          <div class="relative w-full h-44 rounded-xl overflow-hidden bg-stone-100 mb-4 border border-stone-200/80">
            <img 
              src="${escapeHtml(ex.imageUrl)}" 
              alt="${escapeHtml(ex.name)}" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy">
            <div class="absolute top-2.5 left-2.5 flex items-center gap-1.5">
              ${diffBadge}
              <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/90 backdrop-blur text-mistral-ink border border-stone-200">
                ${escapeHtml(ex.mechanics)}
              </span>
            </div>
          </div>

          <!-- Başlık & İsim -->
          <h3 class="font-bold text-base sm:text-lg text-mistral-ink group-hover:text-mistral-orange transition-colors tracking-tight mb-1">
            ${escapeHtml(ex.name)}
          </h3>
          <div class="text-xs text-mistral-stone font-mono mb-3">
            ${escapeHtml(ex.nameEn)}
          </div>

          <!-- Hedef Kaslar & Ekipman Etiketleri -->
          <div class="flex flex-wrap items-center gap-1.5 mb-4 text-[11px]">
            <span class="px-2.5 py-1 rounded-md bg-mistral-cream text-mistral-ink border border-mistral-beige-deep font-semibold">
              🎯 ${escapeHtml(ex.primaryMuscle.toUpperCase())}
            </span>
            <span class="px-2.5 py-1 rounded-md bg-stone-100 text-mistral-slate border border-stone-200">
              ⚙️ ${escapeHtml(ex.equipment.toUpperCase())}
            </span>
            <span class="px-2.5 py-1 rounded-md bg-stone-50 text-mistral-slate border border-stone-200">
              🏷️ ${escapeHtml(ex.type)}
            </span>
          </div>

          <!-- Fizik Tedavi / Postür İpucu -->
          ${ex.therapyTip ? `
            <div class="p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-950 mb-4 leading-relaxed">
              <strong class="font-semibold text-amber-800 flex items-center gap-1 mb-0.5">
                <span>🧘</span> Postür & Fizik Tedavi Notu:
              </strong>
              ${escapeHtml(ex.therapyTip)}
            </div>
          ` : ''}
        </div>

        <!-- Aksiyon Butonları -->
        <div class="flex items-center gap-2 pt-2">
          <button 
            type="button" 
            onclick="addToRoutine('${ex.id}')" 
            class="flex-1 py-2.5 px-3 rounded-xl ${isInRoutine ? 'bg-emerald-600 text-white' : 'bg-stone-900 hover:bg-stone-800 text-white'} font-semibold text-xs transition duration-150 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs">
            <i class="fa-solid ${isInRoutine ? 'fa-check' : 'fa-plus'} text-xs"></i>
            <span>${isInRoutine ? 'Programda Ekli' : 'Programa Ekle'}</span>
          </button>
          
          <button 
            type="button" 
            onclick="openExerciseModal('${ex.id}')" 
            title="Adım Adım Form & Video İzle"
            class="py-2.5 px-3 rounded-xl bg-mistral-cream hover:bg-mistral-orange hover:text-white text-mistral-ink font-semibold text-xs transition duration-150 flex items-center justify-center gap-1.5 cursor-pointer border border-mistral-beige-deep shrink-0">
            <i class="fa-solid fa-play text-xs"></i>
            <span class="hidden sm:inline">Form & Video</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// =============================================================
// SPOR PROGRAMI YÖNETİMİ (ROUTINE BUILDER)
// =============================================================

// Yerel Depolamadan Rutini Yükle
function loadRoutineFromStorage() {
  try {
    const raw = localStorage.getItem('vibe_workout_routine');
    if (raw) {
      userRoutine = JSON.parse(raw);
    }
  } catch (e) {
    userRoutine = [];
  }
  renderRoutine();
}

// Yerel Depolamaya Kaydet
function saveRoutineToStorage() {
  try {
    localStorage.setItem('vibe_workout_routine', JSON.stringify(userRoutine));
  } catch (e) {}
  renderRoutine();
}

// Egzersizi Programa Ekle
function addToRoutine(exerciseId) {
  const ex = allExercises.find(e => e.id === exerciseId);
  if (!ex) return;

  const existing = userRoutine.find(item => item.exerciseId === exerciseId);
  if (existing) {
    existing.sets += 1;
    if (typeof showToast === 'function') {
      showToast(`"${ex.name}" için set sayısı artırıldı (${existing.sets} set).`, 'info');
    }
  } else {
    userRoutine.push({
      exerciseId: ex.id,
      name: ex.name,
      nameEn: ex.nameEn,
      primaryMuscle: ex.primaryMuscle,
      equipment: ex.equipment,
      sets: 3,
      reps: 10,
      weight: ex.equipment === 'bodyweight' ? 0 : 20,
      restSeconds: 60
    });
    if (typeof showToast === 'function') {
      showToast(`"${ex.name}" spor programınıza eklendi!`, 'success');
    }
  }

  saveRoutineToStorage();
  renderExerciseCards(allExercises); // Kartlardaki "Programda Ekli" durumunu güncelle
}

// Programdaki Egzersizi Güncelle (Set, Tekrar, Ağırlık, Dinlenme)
function updateRoutineItem(idx, field, value) {
  if (!userRoutine[idx]) return;
  const numVal = parseInt(value, 10);
  userRoutine[idx][field] = isNaN(numVal) ? value : numVal;
  saveRoutineToStorage();
}

// Egzersiz Sırasını Değiştir (Yukarı / Aşağı)
function moveRoutineItem(idx, direction) {
  const targetIdx = idx + direction;
  if (targetIdx < 0 || targetIdx >= userRoutine.length) return;
  const temp = userRoutine[idx];
  userRoutine[idx] = userRoutine[targetIdx];
  userRoutine[targetIdx] = temp;
  saveRoutineToStorage();
}

// Egzersizi Programdan Çıkar
function removeFromRoutine(idx) {
  if (!userRoutine[idx]) return;
  const removedName = userRoutine[idx].name;
  userRoutine.splice(idx, 1);
  saveRoutineToStorage();
  renderExerciseCards(allExercises);
  if (typeof showToast === 'function') {
    showToast(`"${removedName}" programdan çıkarıldı.`, 'info');
  }
}

// Programı Tamamen Temizle
function clearRoutine() {
  if (userRoutine.length === 0) return;
  if (confirm('Tüm spor programını temizlemek istediğinize emin misiniz?')) {
    userRoutine = [];
    saveRoutineToStorage();
    renderExerciseCards(allExercises);
    if (typeof showToast === 'function') {
      showToast('Spor programınız temizlendi.', 'info');
    }
  }
}

// Program Paneli Arayüzünü Çiz
function renderRoutine() {
  const container = document.getElementById('routine-items-container');
  const countBadge = document.getElementById('routine-count-badge');
  const summaryBar = document.getElementById('routine-summary-bar');

  if (countBadge) {
    countBadge.innerText = `${userRoutine.length} Egzersiz`;
  }

  if (!container) return;

  if (userRoutine.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center rounded-xl bg-stone-50 border border-dashed border-stone-200 text-xs text-mistral-stone">
        Henüz programınıza egzersiz eklemediniz. Aşağıdaki egzersiz kartlarındaki <strong>"➕ Programa Ekle"</strong> butonuna tıklayarak hareketleri buraya toplayabilirsiniz.
      </div>
    `;
    if (summaryBar) summaryBar.classList.add('hidden');
    return;
  }

  if (summaryBar) summaryBar.classList.remove('hidden');

  // Özet İstatistikleri Hesapla
  const totalSets = userRoutine.reduce((sum, item) => sum + (parseInt(item.sets, 10) || 0), 0);
  const totalSeconds = userRoutine.reduce((sum, item) => sum + ((parseInt(item.sets, 10) || 0) * (parseInt(item.restSeconds, 10) || 60) + 45), 0);
  const estMinutes = Math.max(10, Math.round(totalSeconds / 60));
  const uniqueMuscles = [...new Set(userRoutine.map(i => i.primaryMuscle.toUpperCase()))].join(', ');

  document.getElementById('stat-routine-exercises').innerText = userRoutine.length;
  document.getElementById('stat-routine-sets').innerText = totalSets;
  document.getElementById('stat-routine-time').innerText = `~${estMinutes} dk`;
  document.getElementById('stat-routine-muscles').innerText = uniqueMuscles;

  // Tablo / Liste Çizimi
  container.innerHTML = `
    <div class="space-y-3">
      ${userRoutine.map((item, idx) => `
        <div class="p-4 rounded-xl bg-stone-50 border border-mistral-hairline flex flex-col md:flex-row md:items-center justify-between gap-4">
          <!-- Sol: İsim & Sıralama -->
          <div class="flex items-center gap-3">
            <span class="w-6 h-6 rounded-full bg-mistral-cream text-mistral-orange border border-mistral-beige-deep text-xs font-bold flex items-center justify-center shrink-0">
              ${idx + 1}
            </span>
            <div>
              <div class="font-bold text-sm text-mistral-ink">${escapeHtml(item.name)}</div>
              <div class="text-[11px] text-mistral-stone font-mono">
                ${escapeHtml(item.primaryMuscle.toUpperCase())} &bull; ${escapeHtml(item.equipment.toUpperCase())}
              </div>
            </div>
          </div>

          <!-- Orta: Parametre Düzenleyicileri (Set, Tekrar, Ağırlık, Dinlenme) -->
          <div class="flex flex-wrap items-center gap-3 text-xs">
            <div class="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-mistral-hairline">
              <span class="text-mistral-stone font-medium">Set:</span>
              <input 
                type="number" 
                min="1" 
                max="12" 
                value="${item.sets}" 
                onchange="updateRoutineItem(${idx}, 'sets', this.value)" 
                class="w-12 text-center font-bold text-mistral-ink focus:outline-none focus:text-mistral-orange">
            </div>

            <div class="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-mistral-hairline">
              <span class="text-mistral-stone font-medium">Tekrar:</span>
              <input 
                type="number" 
                min="1" 
                max="100" 
                value="${item.reps}" 
                onchange="updateRoutineItem(${idx}, 'reps', this.value)" 
                class="w-12 text-center font-bold text-mistral-ink focus:outline-none focus:text-mistral-orange">
            </div>

            <div class="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-mistral-hairline">
              <span class="text-mistral-stone font-medium">Ağırlık:</span>
              <input 
                type="number" 
                min="0" 
                max="500" 
                step="2.5" 
                value="${item.weight}" 
                onchange="updateRoutineItem(${idx}, 'weight', this.value)" 
                class="w-14 text-center font-bold text-mistral-ink focus:outline-none focus:text-mistral-orange">
              <span class="text-mistral-stone text-[11px]">kg</span>
            </div>

            <div class="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-mistral-hairline">
              <span class="text-mistral-stone font-medium">Mola:</span>
              <input 
                type="number" 
                min="15" 
                max="300" 
                step="15" 
                value="${item.restSeconds}" 
                onchange="updateRoutineItem(${idx}, 'restSeconds', this.value)" 
                class="w-12 text-center font-bold text-mistral-ink focus:outline-none focus:text-mistral-orange">
              <span class="text-mistral-stone text-[11px]">sn</span>
            </div>
          </div>

          <!-- Sağ: Yukarı / Aşağı / Sil Butonları -->
          <div class="flex items-center gap-1 self-end md:self-center">
            <button 
              type="button" 
              onclick="moveRoutineItem(${idx}, -1)" 
              ${idx === 0 ? 'disabled class="w-7 h-7 rounded text-stone-300 cursor-not-allowed"' : 'class="w-7 h-7 rounded hover:bg-stone-200 text-mistral-slate cursor-pointer"'} 
              title="Yukarı Taşı">
              <i class="fa-solid fa-chevron-up text-xs"></i>
            </button>
            <button 
              type="button" 
              onclick="moveRoutineItem(${idx}, 1)" 
              ${idx === userRoutine.length - 1 ? 'disabled class="w-7 h-7 rounded text-stone-300 cursor-not-allowed"' : 'class="w-7 h-7 rounded hover:bg-stone-200 text-mistral-slate cursor-pointer"'} 
              title="Aşağı Taşı">
              <i class="fa-solid fa-chevron-down text-xs"></i>
            </button>
            <button 
              type="button" 
              onclick="removeFromRoutine(${idx})" 
              class="w-7 h-7 rounded hover:bg-rose-100 text-rose-600 transition cursor-pointer flex items-center justify-center ml-1" 
              title="Programdan Çıkar">
              <i class="fa-solid fa-trash text-xs"></i>
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// =============================================================
// PROGRAMI FARKLI FORMATLARDA DIŞA AKTARMA (EXPORT ENGINE)
// =============================================================

function exportRoutine(format) {
  if (userRoutine.length === 0) {
    if (typeof showToast === 'function') {
      showToast('Dışa aktarmak için önce programınıza egzersiz ekleyin.', 'warning');
    }
    return;
  }

  const dateStr = new Date().toLocaleDateString('tr-TR');

  if (format === 'markdown') {
    // 1. Markdown / Düz Metin Formatı (Panoya Kopyalama)
    let md = `# 🏋️ Antrenman Programım - ${dateStr}\n\n`;
    md += `> Toplam: ${userRoutine.length} Egzersiz | Tahmini Süre: ~${Math.round(userRoutine.length * 7)} dk\n\n`;
    userRoutine.forEach((item, idx) => {
      md += `### ${idx + 1}. ${item.name} (${item.primaryMuscle.toUpperCase()})\n`;
      md += `- **Ekipman:** ${item.equipment.toUpperCase()}\n`;
      md += `- **Hedef:** ${item.sets} Set x ${item.reps} Tekrar @ ${item.weight} kg (Dinlenme: ${item.restSeconds} sn)\n`;
      for (let s = 1; s <= item.sets; s++) {
        md += `  - [ ] Set ${s}: [   ] tekrar @ [   ] kg\n`;
      }
      md += `\n`;
    });

    if (typeof safeCopyToClipboard === 'function') {
      safeCopyToClipboard(md, 'Antrenman programı Markdown olarak panoya kopyalandı!');
    } else {
      navigator.clipboard.writeText(md).then(() => {
        if (typeof showToast === 'function') showToast('Program panoya kopyalandı!', 'success');
      });
    }
  } else if (format === 'csv') {
    // 2. CSV / Excel Formatı İndir
    let csv = `Sıra,Egzersiz Adı,Kas Grubu,Ekipman,Set Sayısı,Tekrar,Ağırlık (kg),Dinlenme (sn)\n`;
    userRoutine.forEach((item, idx) => {
      csv += `"${idx + 1}","${item.name}","${item.primaryMuscle}","${item.equipment}","${item.sets}","${item.reps}","${item.weight}","${item.restSeconds}"\n`;
    });

    const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `antrenman-programim-${dateStr.replace(/\./g, '-')}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    if (typeof showToast === 'function') showToast('CSV dosyası başarıyla indirildi.', 'success');
  } else if (format === 'json') {
    // 3. JSON Formatı İndir
    const exportData = {
      title: "Kişisel Antrenman Programı",
      date: dateStr,
      exerciseCount: userRoutine.length,
      routine: userRoutine
    };
    const jsonStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `antrenman-programim-${dateStr.replace(/\./g, '-')}.json`;
    a.click();
    URL.revokeObjectURL(url);
    if (typeof showToast === 'function') showToast('JSON dosyası başarıyla indirildi.', 'success');
  } else if (format === 'print') {
    // 4. Yazdır / PDF Formatı
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      window.print();
      return;
    }

    const printHtml = `
      <!DOCTYPE html>
      <html lang="tr">
      <head>
        <meta charset="utf-8">
        <title>Antrenman Programım - ${dateStr}</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 24px; color: #111; }
          h1 { font-size: 20px; border-bottom: 2px solid #000; padding-bottom: 8px; margin-bottom: 12px; }
          .meta { font-size: 12px; color: #555; margin-bottom: 20px; }
          .item { border: 1px solid #ddd; border-radius: 8px; padding: 12px; margin-bottom: 12px; page-break-inside: avoid; }
          .item-title { font-weight: bold; font-size: 15px; margin-bottom: 4px; }
          .item-sub { font-size: 12px; color: #666; margin-bottom: 8px; }
          .set-boxes { display: flex; gap: 8px; font-size: 12px; }
          .set-box { border: 1px solid #999; padding: 6px 10px; border-radius: 4px; min-width: 80px; }
          @media print {
            body { padding: 0; }
            button { display: none; }
          }
        </style>
      </head>
      <body>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h1>🏋️ Kişisel Antrenman Takip Formu</h1>
          <button onclick="window.print()" style="padding: 6px 14px; font-size: 12px; font-weight: bold; cursor: pointer;">Yazdır / PDF</button>
        </div>
        <div class="meta">
          <strong>Tarih:</strong> ${dateStr} &bull; <strong>Toplam Egzersiz:</strong> ${userRoutine.length} &bull; <strong>Hedef:</strong> Güç & Postür Gelişimi
        </div>
        <div>
          ${userRoutine.map((item, idx) => `
            <div class="item">
              <div class="item-title">${idx + 1}. ${escapeHtml(item.name)}</div>
              <div class="item-sub">Kas Grubu: ${escapeHtml(item.primaryMuscle.toUpperCase())} &bull; Ekipman: ${escapeHtml(item.equipment.toUpperCase())} &bull; Hedef: ${item.sets} Set x ${item.reps} Tekrar @ ${item.weight} kg &bull; Dinlenme: ${item.restSeconds} sn</div>
              <div class="set-boxes">
                ${Array.from({ length: item.sets }).map((_, s) => `
                  <div class="set-box">
                    <strong>Set ${s + 1}</strong> [ &nbsp; ]<br>
                    <span style="font-size: 10px; color: #777;">__ kg &times; __ tk</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(printHtml);
    printWindow.document.close();
  }
}

// =============================================================
// MODAL DİYALOG VE VİDEO YÖNETİMİ (KAPATINCA VİDEOYU DURDURUR)
// =============================================================

function openExerciseModal(exerciseId) {
  const ex = allExercises.find(e => e.id === exerciseId);
  if (!ex) return;

  const modal = document.getElementById('exercise-modal');
  const modalContent = document.getElementById('modal-exercise-content');

  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <!-- Modal Başlık -->
    <div class="p-6 border-b border-mistral-hairline flex items-start justify-between gap-4">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-mistral-cream text-mistral-orange border border-mistral-beige-deep uppercase">
            ${escapeHtml(ex.primaryMuscle)}
          </span>
          <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-stone-100 text-mistral-ink border border-stone-200">
            ${escapeHtml(ex.equipment)}
          </span>
        </div>
        <h2 class="text-xl sm:text-2xl font-bold font-editorial text-mistral-ink tracking-tight">
          ${escapeHtml(ex.name)}
        </h2>
        <div class="text-xs text-mistral-stone font-mono mt-0.5">${escapeHtml(ex.nameEn)}</div>
      </div>
      <button 
        type="button" 
        onclick="closeExerciseModal()" 
        class="w-8 h-8 rounded-lg bg-stone-100 hover:bg-stone-200 text-mistral-slate flex items-center justify-center text-sm cursor-pointer transition">
        ✕
      </button>
    </div>

    <!-- Modal Gövde (Video + Talimatlar) -->
    <div class="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
      
      <!-- YouTube Video / Animasyon İskeleti -->
      ${ex.videoEmbedUrl ? `
        <div class="w-full aspect-video rounded-xl overflow-hidden bg-black shadow-md border border-stone-200">
          <iframe 
            src="${escapeHtml(ex.videoEmbedUrl)}" 
            title="${escapeHtml(ex.name)}" 
            class="w-full h-full border-0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
      ` : ''}

      <!-- Adım Adım Doğru Form Talimatları -->
      <div>
        <h4 class="font-bold text-sm text-mistral-ink mb-3 flex items-center gap-2">
          <span>📋</span> Doğru Form & Hareketi Uygulama Adımları
        </h4>
        <div class="space-y-2.5">
          ${ex.instructions.map((step, idx) => `
            <div class="p-3.5 rounded-xl bg-stone-50 border border-mistral-hairline flex items-start gap-3 text-xs leading-relaxed text-mistral-slate">
              <span class="w-5 h-5 rounded-full bg-mistral-orange text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                ${idx + 1}
              </span>
              <span>${escapeHtml(step)}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Fizik Tedavi & Yaralanma Önleme İpuçları -->
      ${ex.therapyTip ? `
        <div class="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs space-y-1.5 leading-relaxed">
          <strong class="font-bold text-amber-900 flex items-center gap-1.5 text-sm">
            <span>🛡️</span> Sakatlık Önleme & Postür Terapisi
          </strong>
          <p>${escapeHtml(ex.therapyTip)}</p>
        </div>
      ` : ''}

      <!-- Hedef Kas Anatomisi Özeti -->
      <div class="p-4 rounded-xl bg-mistral-cream border border-mistral-beige-deep text-xs text-mistral-slate">
        <strong class="text-mistral-ink block font-bold mb-1">Anatomik Katılım:</strong>
        <div>Birincil Hedef: <strong class="text-mistral-orange">${escapeHtml(ex.primaryMuscle.toUpperCase())}</strong></div>
        <div>İkincil Destekleyici: <span class="text-mistral-slate">${ex.secondaryMuscles.map(m => m.toUpperCase()).join(', ')}</span></div>
      </div>

    </div>
  `;

  modal.classList.remove('hidden');
}

// Modal Kapatıldığında İçeriği Boşaltarak Videoyu ve Sesi Anında Durdurur
function closeExerciseModal() {
  const modal = document.getElementById('exercise-modal');
  const modalContent = document.getElementById('modal-exercise-content');
  if (modalContent) {
    modalContent.innerHTML = ''; // İframe tamamen yok edilir, video/ses kesin olarak durur
  }
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Global Kapsama Bağla (Window)
window.selectMuscle = selectMuscle;
window.switchBodyView = switchBodyView;
window.filterByEquipment = filterByEquipment;
window.onExerciseSearch = onExerciseSearch;
window.openExerciseModal = openExerciseModal;
window.closeExerciseModal = closeExerciseModal;
window.addToRoutine = addToRoutine;
window.updateRoutineItem = updateRoutineItem;
window.moveRoutineItem = moveRoutineItem;
window.removeFromRoutine = removeFromRoutine;
window.clearRoutine = clearRoutine;
window.exportRoutine = exportRoutine;

// Sayfa Yüklendiğinde Başlat
document.addEventListener('DOMContentLoaded', () => {
  loadMuscles();
  loadExercises();
  loadRoutineFromStorage();

  // Escape tuşuna basıldığında modalı kapatıp videoyu durdur
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeExerciseModal();
    }
  });

  // Modal arka planına tıklandığında kapatıp videoyu durdur
  const modal = document.getElementById('exercise-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeExerciseModal();
      }
    });
  }
});

