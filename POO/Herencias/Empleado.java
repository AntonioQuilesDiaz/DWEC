class Empleado{
    
    // atrivutos
    private String Nombre; 

    // contructores
    public Empleado(){
        Nombre = "";
    }

    public Empleado(String Nombre){
        this.Nombre = Nombre;
    }


    // Get y Set
    public String getNombre() {
        return Nombre;
    }

  
    public void setNombre(String Nombre) {
        this.Nombre = Nombre;
    }

    // To String
    public String toString(){
        return "Empleado"+Nombre;
    }

}