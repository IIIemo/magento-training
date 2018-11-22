<?php

namespace Oggetto\Promo\Plugin;

use Magento\ConfigurableProduct\Block\Product\View\Type\Configurable;
use Magento\Framework\Serialize\Serializer\Json;

class ConfigurableProductType
{
    private $json;

    public function __construct(Json $json)
    {
        $this->json = $json;
    }

    public function afterGetJsonConfig(Configurable $subject, string $result): string
    {
        $config = $this->json->unserialize($result);
        foreach ($config['optionPrices'] as &$option) {
            $option['promo'] = (bool) rand(0, 1);
        }
        return $this->json->serialize($config);
    }
}