package org.example;  // ou o nome correto do seu pacote

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")  // depois pode restringir, por ex: "http://localhost:5500"
                .allowedMethods("GET", "POST", "PUT", "DELETE");
    }
}
