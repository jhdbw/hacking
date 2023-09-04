#!/bin/bash

# especificar el archivo a extraer y la lista de contraseñas
archivo="./thanos.jpeg"
lista=/usr/share/wordlists/rockyou.txt

# leer la lista de contraseñas y ejecutar el comando steghide con cada contraseña
while read lista; do
  steghide extract -sf "$archivo" -p "$lista"
  # verificar si la extracción fue exitosa y mostrar la contraseña si es así
  if [ $? -eq 0 ]; then
    echo "Contraseña encontrada: $lista"
    exit 0
  fi

done < "$lista"

# si no se encontró la contraseña en la lista, mostrar un mensaje de error
echo "No se encontró ninguna contraseña válida en la lista:"
