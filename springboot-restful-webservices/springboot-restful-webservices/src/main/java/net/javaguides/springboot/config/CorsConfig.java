package net.javaguides.springboot.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;




    @Configuration
    public class CorsConfig {
        @Bean
        public CorsFilter corsFilter() {
            CorsConfiguration config = new CorsConfiguration();
            config.addAllowedOriginPattern("*"); // Allows requests from all origins
            config.addAllowedMethod("*");        // Allows all HTTP methods (GET, POST, etc.)
            config.addAllowedHeader("*");        // Allows all headers

            UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
            source.registerCorsConfiguration("/**", config); // Apply to all routes
            return new CorsFilter(source);
        }
    }


