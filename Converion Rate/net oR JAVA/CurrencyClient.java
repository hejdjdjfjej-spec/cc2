import java.net.*;
import java.io.*;

public class CurrencyClient {

    public static void main(String[] args) throws Exception {

        URL url = new URL("http://localhost:3000/convert?inr=7500");

        BufferedReader br = new BufferedReader(
                new InputStreamReader(url.openStream()));

        String line;

        while ((line = br.readLine()) != null) {
            System.out.println(line);
        }

        br.close();
    }
}