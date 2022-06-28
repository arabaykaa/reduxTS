import { Route, Routes } from "react-router-dom";
import { NewContactsForm } from "./components/forms/newContactsForm";
import { Header } from "./components/header/header";
import { Contacts } from "./components/main/contacts/contacts";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="newContacts" element={<NewContactsForm />} />
      </Routes>
    </>
  );
}

export default App;
