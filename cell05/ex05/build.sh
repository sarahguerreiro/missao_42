if [ $# -eq 0 ] ; then
    echo "No arguments supplied"
else 
    for item in "$@"; do
      mkdir ex"$item"
    done
fi
