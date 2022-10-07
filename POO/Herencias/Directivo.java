public class Directivo extends Empleado {

    public Directivo(){
        super("");
    }
    public Directivo(String Nombre){
        super(Nombre);
    }
    public String toString(){
        return super.toString()+" Directivo";
    }
}