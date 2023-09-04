# DRAGONDICCIO
# by JHDBW
# 2023/09/03
print(f"#########################")
print(f"# DRAGONDICCIO by jhdbw #")
print(f"#########################")

# Obtener la lista de palabras separadas por coma desde el usuario
palabras = input("Ingrese las palabras separadas por coma: ")

# Leer el archivo de texto
# archivo = input("Ingrese el nombre del archivo de texto: ")
archivo = "dragondiccio.dat"
with open(archivo, "r") as archivo_texto:
    lineas = archivo_texto.readlines()

# Agregar las palabras al final de cada línea y escribir en un nuevo archivo
nuevo_archivo = input("Ingrese el nombre del diccionario a crear: ")
with open(nuevo_archivo, "w") as nuevo_archivo_texto:
    for palabra in palabras.split(","):
        palabra = palabra.strip()  # Eliminar espacios en blanco si es necesario
        for linea in lineas:
            linea = linea.strip()  # Eliminar caracteres de nueva línea si es necesario
            nueva_linea = f"{palabra}{linea}\n"
            nuevo_archivo_texto.write(nueva_linea)

print(f"Se ha creado el archivo '{nuevo_archivo}' con las palabras agregadas al final de cada línea.")

