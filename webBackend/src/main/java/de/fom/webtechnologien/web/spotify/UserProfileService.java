package de.fom.webtechnologien.web.spotify;


import de.fom.webtechnologien.web.entities.UserDetails;
import de.fom.webtechnologien.web.repos.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import se.michaelthelin.spotify.model_objects.specification.User;

@Service
public class UserProfileService {

    @Autowired
    private UserDetailsRepository userDetailsRepository;

    public UserDetails insertOrUpdateUserDetails(User user, String accessToken, String refreshToken) {
        return null;
        // Create Your logic
    }
}