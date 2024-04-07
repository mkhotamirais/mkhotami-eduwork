import { FaExternalLinkAlt } from "react-icons/fa";
import { H1, H2, Pre } from "../../components/Tags";

const Projects = () => {
  return (
    <div>
      <H1>Halo</H1>
      <h3>web static</h3>
      <ul className="list-inside list-disc" id="tugasPembelajaran">
        <li>
          html:{" "}
          <a href="../simple-webpage-tasks/tugas1-html/index.html" target="blank" rel="noopener">
            hasil tugas html
          </a>{" "}
          | bootstrap:{" "}
          <a href="../simple-webpage-tasks/tugas2-bootstrap/BootstrapStudiKasus.html" target="blank" rel="noopener">
            hasil tugas bootstrap
          </a>
          gunakan lightshoot | control flow{" "}
          <a href="../simple-webpage-tasks/tugas3-jsTebakAngka/index.html" target="blank" rel="noopener">
            hasil tugas tebak angka
          </a>{" "}
          | conditional map filter reducer | destructuring array dan obejek | oop, mini librari seperti{" "}
          <a href="https://gridjs.io/" target="blank" rel="noopener">
            grid.js
          </a>{" "}
          atau{" "}
          <a href="https://datatables.net/" target="blank" rel="noopener">
            datatables.js
          </a>
          ?{" "}
          <a href="../simple-webpage-tasks/tugas4-miniLibrary/index.html" target="blank" rel="noopener">
            hasil mini library
          </a>{" "}
          | buat modular | callback: buat tabel seperti{" "}
          <a href="https://uci31.csb.app/" target="blank" rel="noopener">
            uci31.app
          </a>{" "}
          datanya dari{" "}
          <a href="https://jsonplaceholder.typicode.com/users" target="blank" rel="noopener">
            jsonplaceholder user, pastikan menggunakan callback
          </a>
          ?{" "}
          <a href="../simple-webpage-tasks/tugas6-jsonplaceholder/index.html" target="blank" rel="noopener">
            hasil data jsonplaceholder
          </a>{" "}
          | promise, portal berita dari{" "}
          <a href="" target="blank" rel="noopener">
            news api
          </a>
          ?{" "}
          <a href="../simple-webpage-tasks/tugas7-portalBeritaPromise/index.html" target="blank" rel="noopener">
            hasil newsapi
          </a>{" "}
          | deploy vercel | form validasi | lifecycle class component/statefull | stateless | rest api sequelize/mysql2 |
          rest api mongodb{" "}
          <a href="https://github.com/eduwork2021/react-express-cruds-template" target="blank" rel="noopener">
            eduwork template
          </a>{" "}
          | toko online fullstack | front-end sisko dari{" "}
          <a
            href="../https://documenter.getpostman.com/view/966202/2s9Xy2PsAa#69422121-97fc-4cc7-8845-2fcec8f257b5"
            target="blank"
            rel="noopener"
          >
            sistem toko
          </a>
        </li>
      </ul>
      <H2>Exam</H2>
      <ol className="list-inside list-decimal">
        <li>
          Synchronous & Asynchronous: Synchronous cara eksekusi program secara blocking; Asynchronous eksekusi program secara
          blocking. Blocking: tidak menjalankan task selanjutnya jika task sebelumnya belum selesai. Non-blocking tetap
          menjalankan task selanjutnya walau task sebelumnya belum selesai. untuk melihat visualisasinya, jalankan codenya di{" "}
          <a href="https://www.jsv9000.app/" className="underline">
            Js Visualizer
          </a>
          <Pre>
            {`
--- base
console.log("task1")
console.log("task2")
console.log("task3")

--- call stack
function Fn1(){
  console.log('my task')
}
function Fn2(){
  return Fn1()
}
function Fn3(){
  return Fn2()
}
Fn3()

--- task queue
setTimeout(function Fn1(){
  console.log("task1")
}, 3000)
setTimeout(function Fn2(){
  console.log("task2")
}, 1000)
setTimeout(function Fn3(){
  console.log("task3")
}, 2000)
function Fn4(){
  console.log('task4')
}
Fn4()

--- microtask queue
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((res) => res.json())
  .then((data) => console.log(data))
Promise.resolve().then(function Fn1() {
  console.log('ditepati')
});
Promise.reject().catch(function Fn3() {
  console.log('ingkar')
})

--- task vs microtask
setTimeout(function Fn1() {
  console.log('task1')
}, 0);
Promise.resolve().then(function Fn2() {
  console.log('ditepati')
})
`}
          </Pre>
        </li>
        <li>
          Hook: cara agar functional component bisa akses state dan lifecycle yang dimiliki class component. Sebenarya Hook
          tidak punya lifecycle tapi punya side effect (efek samping). dengan efek samping itu kita bisa membuat seolah olah
          functional komponen itu bersifat seperti class component. Manfaatnya, performa lebih cepat. Aturannya: hanya boleh
          dipanggi di top level function, harus dipanggil dari fungsi component / custom hook, tidak bisa dipakai di class
          component
        </li>
        <li>useEffect, useState, useReducer</li>
        <li>
          middleware: Pada dasarnya express adalah serangkaian fungsi middleware. fungsi middleware adalah fungsi yang
          mempunyai akses ke objek reqest, response dan fungsi middleware berikutnya dalam siklus request-response. Jadi
          middleware adalah fungsi yang berjalan di antara request dan response. disebut middleware karena dieksekusi di
          tengah antara mengirim request dan menerima response. Tipe middleware: application-level, router-level,
          error-handling, built-in, third-party
        </li>
        <li>
          nosql: NoSql (not only sql) yakni database selain sql, tentu sangat banyak jenisnya / tipenya: key-value store ex
          redis; document base ex mongodb; coulumn-oriented db ex Cassandra; graph db ex neo4. NoSql: scheemaless/flexible
          schema yakni blueprint database yang menentukan bagaimana data akan disimpan; denormalizatin; non-relational
          database (tidak menganut primary key, foreign key dll); unstructured, semi-structured, structured data. konsep
          denormalization (embedded document), misal data pertama ada 2 fileld (nama, umur) data kedua ada 3 field (nama,
          umur, asal). terminologi: sql/nosql; db/db; table/collection;row or record/document; column or field/field. MongoDb
          adalah db berbasis document yang memiliki skalabilitas dan fleksibilitas yang kita inginkan dan vitur query dan
          indexing yang kita butuhkan. alasan menggunakan mongodb: format datanya JSON (BSON) binary json; kareja json itu
          javascript; sebagai teknologi pendukung MERN, MEVN, MEAN
        </li>
        <li>tipe relasi sql: rdbms</li>
        <li>
          axios: axios adalah promise-based http client for node.js and the browser. Isomorphic dapat berjalan di browser dan
          nodejs dengan codebase yang sama. Fungsinya, di server menggunakan native node.js http module, di client
          menggunakan XMLHttpRequest, intersep dan transformasi request dan response, cancel request
        </li>
        <li>
          casl: adalah pustaka JavaScript otorisasi isomorfik yang membatasi sumber daya apa yang boleh diakses oleh klien
          tertentu.
        </li>
        <li>props: props, useContext, redux</li>
        <li>
          flex dan grid: flex: adalah model layout 1 dimensi (baris atau kolom) yang dapat mengatur jarak dan penjajaran
          antar item dalam sebuah kontainer. kondisi flex dimungkinkan jika terdapat container (parent) dan item-itemnya
          (child). ketika items diatur secara horizontal disebut main-axis. vertical cross-axis. lebar container main size.
          tingginya cross size. titik awal kiri itu main start. akhir kanan main end. titik awal atas cross start. titik
          akhir bawah cross end. Container inilah yang diberi display flex. grid: adalah model layout berbentuk grid 2
          dimensi (baris dan kolom). kondisi grid dimungkinkan jika terdapat container (parent) dan item-itemnya (child).
          container inilah yang diberi display grid
        </li>
        <li>
          req dan res express: siklus reqeust-response dimulai ketika user mengirim Request ke server; express app akan
          menerima request sehingga menciptakan object req dan res; lalu fungsi middleware dieksekusi sehingga dapat
          memanipulasi data sesuai kebutuhan urutan eksekusinya: express.json() - customMiddleware - Route handler
        </li>

        <li>
          opsi selain express: beberapa framework yang digunakan di atas nodejs: <a href="https://expressjs.com/">express</a>
          , <a href="https://koajs.com/">koa</a>, <a href="https://sailsjs.com/">sails</a>,{" "}
          <a href="https://loopback.io/">loopback</a>, <a href="https://hapi.dev/">hapi</a>,{" "}
          <a href="https://nestjs.com/">nest</a>, <a href="https://adonisjs.com/">adonis</a>
        </li>
        <li>client side dan server side: nanti dulu</li>
        <li>spa: single page application</li>
        <li>
          redux: Redux adalah wadah state yang dapat diprediksi untuk javascript app. Membantu menulis aplikasi yang
          prilakunya konsisten. Fungsinya untuk mengelola state (state management) dengan mengumpulkannya di global state,
          controlnya terpusat, juga memisahkan antara logic dan view agar reusable. dibutuhkan saat aplikasi semakin besar
          dan kompleks. modern web app direpresentasikan dengan pohon komponen kompleks yang membagi dan membuat data
        </li>
        <li>
          auth2: davegray: authentication refers to the process of verifying who someone is. authorization is the process of
          virifying what resources a user has access to. verifikasi adalah pemeriksaan tentang kebenaran laporan, pernyataan,
          perhitungan uang, dan sebagainya. ketika kita login dengan username dan password kita mengverifikasi siapa kita,
          itu lah proses authentikasi. setelah login berhasil, express api membuat jwt untuk konfirmasi proses otentikasi.
          yang memberi akses kepada api endpoin yang berisi sumber data. menggunakan authorization header
        </li>
        <li>library otorisasi: banyak</li>
        <li>409: conflict, 500: internal server error, 401: unauthorized</li>
        <li>localstorage: data sementara</li>
        <li>file upload library: multer</li>
      </ol>
    </div>
  );
};

export default Projects;

const ExternalBtn = ({ menu }) => (
  <a href={menu.href} className="flex border rounded p-2 gap-1 text-sm capitalize">
    <span>{menu.title}</span>
    <FaExternalLinkAlt className="text-[0.5rem]" />
  </a>
);
ExternalBtn.propTypes;
