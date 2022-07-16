$Source= "./build/*"
$Dest = "C:\Users\tikkhun\AppData\Roaming\Code\User\snippets"

Copy-Item -Path $Source -Destination $Dest -Force -Recurse -ErrorAction Stop 
