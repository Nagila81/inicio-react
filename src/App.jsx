// import BoasVindas from "./components/BoasVindas";
// import { CardDefault } from "./components/Card";
// import { Aluno, Turma } from "./components/Classe";

import Perfil from "./components/Perfil";
import PerfilButton from "./components/PerfilButton";

const App = () => {
  return (
    <>
      {/* <BoasVindas
        nome="Marcos"
        turma="FS22"
      />
      <BoasVindas
        nome="Nagila"
        turma="FS22"
      />
      <BoasVindas
        nome="Matheus"
        turma="FS31"
      />
      <Turma nome={"FS22"}>
        <Aluno nome={"Well"} />
        <Aluno nome={"Eduardo"} />
        <Aluno nome={"Leo"} />
        <Aluno nome={"Marcos"} />
      </Turma>
      <Turma nome={"FS31"}>
        <Aluno nome={"Matheus"} />
        <Aluno nome={"Adriana"} />
        <Aluno nome={"Isaac"} />
        <Aluno nome={"Magnum"} />
      </Turma>

      <CardDefault 
        urlImagem={"https://www.ecotravel.pt/content/uploads/maingallery/crops/7042_default_1693304292.jpg"}
        titulo={"Istambul Turquia"}
        descricao={"Mesquita Azul de Istambul"}
      />
      <CardDefault 
        urlImagem={"https://img.freepik.com/fotos-premium/ponte-iluminada-do-bosforo-a-noite-istambul-turquia_400112-629.jpg?w=360"}
        titulo={"Istambul Turquia"}
        descricao={"Ponte iluminada do Bósforo"}
      /> */}
      <Perfil 
            fotoPerfil={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6yoQI4rSNos9fsBk2kOSHfUbmrwyr5MDGnw&s"}
            titulo={"Foto de Perfil"}
            nome={"Nagila Patricio"}
            localizacao={"Eusébio-CE Brasil"}
            cargo={"FullStack Developer"}
            >
        <PerfilButton 
          link={"https://github.com/"} 
          titulo={"github"}
        />
        <PerfilButton 
          link={"https://linkedin.com/in/nagila-silva"} 
          titulo={"linkedin"}
        />
      </Perfil>
      <Perfil
      fotoPerfil={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj33COEsGDLDATwWkkfAlpbltm3hAshE2phw&s"}
      titulo={"Foto de Perfil"}
      nome={"Naná Silva"}
      localizacao={"Fortaleza-CE Brasil"}
      cargo={"Backend"}
      >
        <PerfilButton 
          link={"https://google.com"} 
          titulo={"google"}
        /> 
      </Perfil>
    </>
  );
}

export default App;