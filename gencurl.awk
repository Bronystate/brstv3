BEGIN {
    print "request = \"PURGE\""
    print "header = \"Host: www.bronystate.net\""
}
{
    path = $5
    sub("^_site/", "", path)
}
$4 ~ /[<>ch]f[c\+]......../ {
    print "File:     ", path > "/dev/stderr"
    printf "url = \"http://localhost/%s\"\n", path
}
$4 ~ /[<>ch]d[c\+]......../ {
    print "Dir:      ", path > "/dev/stderr"
    printf "url = \"http://localhost/%s/\"\n", path
}
$4 ~ /\*deleting/ {
    print "Deleting: ", path > "/dev/stderr"
    printf "url = \"http://localhost/%s\"\n", path
}

