Param(
  [switch]$d,
  [switch]$p
)

if ($d)
{
  $env:API_URL = 'http://192.168.0.219:33602'
  Write-Host("Url Set to Dev Server")
}
elseif ($p){
  $env:API_URL = ''
  Write-Host("URL Unset (prod server)")
}
else{
  Write-Error("You must specify -p or -d ")
}
