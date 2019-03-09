function localtunnel {
  lt -s laksn192kzjd57aksjdf --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done