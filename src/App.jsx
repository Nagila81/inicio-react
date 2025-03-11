import BoasVindas from "./components/BoasVindas";
import { CardDefault } from "./components/Card";
import { Aluno, Turma } from "./components/Classe";

const App = () => {
  return (
    <>
      <BoasVindas
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
        urlImagem={"https://cdn.motor1.com/images/mgl/KPK4R/s3/bmw-320i-m-sport-2021-teste-br.jpg"}
        titulo={"Meu titulo"}
        descricao={"lorem ipsum dolor"}
      />
      <CardDefault 
        urlImagem={"https://img.freepik.com/fotos-premium/ponte-iluminada-do-bosforo-a-noite-istambul-turquia_400112-629.jpg?w=360"}
        titulo={"Istambul Turquia"}
        descricao={"Ponte iluminada do Bósforo"}
      />
    </>
  );
}

export default App;