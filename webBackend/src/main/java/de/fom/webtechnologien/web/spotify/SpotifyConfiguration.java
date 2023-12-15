package de.fom.webtechnologien.web.spotify;

import java.net.URI;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import se.michaelthelin.spotify.SpotifyApi;
import se.michaelthelin.spotify.SpotifyHttpManager;

@Service
public class SpotifyConfiguration {

    @Value("${redirect.server.ip}")
    private String customIp;

    public SpotifyApi getSpotifyObject() {
        URI redirectedURL =  SpotifyHttpManager.makeUri(customIp + "/api/get-user-code/");

        return new SpotifyApi
                .Builder()
                .setClientId("0ff348641383406f86f138829c3b0b83")
                .setClientSecret("dbc198935e944cdab1ba85ae88940d38")
                .setRedirectUri(redirectedURL)
                .build();
    }
}