$Source= "./build/*"
$Dest = "$env:APPDATA\Roaming\Code\User\snippets"
Copy-Item -Path $Source -Destination $Dest -Force -Recurse -ErrorAction Stop 
