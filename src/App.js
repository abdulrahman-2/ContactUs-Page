import "./App.css";
import ContactForm from "./Componets/ContactForm/ContactForm";
import ContactHeader from "./Componets/ContactHeader/ContactHeader";
import Navbar from "./Componets/Navbar/Navbar";
function App() {
  return (
    <div className="container">
      <Navbar />
      <ContactHeader />
      <ContactForm />
    </div>
  );
}

export default App;
