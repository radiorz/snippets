$Source = "./snippets-jetBrains/*"
$Dest = "$env:APPDATA/AppData/Roaming/JetBrains/*/templates"
Copy-Item -Path $Source -Destination $Dest -Force -Recurse -ErrorAction Stop 
Write-Output $Dest
