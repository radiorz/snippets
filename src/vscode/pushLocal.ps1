$Source= "./.build/*"
$Dest = "$env:APPDATA\Code\User\snippets"
Copy-Item -Path $Source -Destination $Dest -Force -Recurse -ErrorAction Stop 
Write-Output $Dest
