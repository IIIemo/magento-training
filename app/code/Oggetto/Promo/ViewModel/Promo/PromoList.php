<?php

namespace Oggetto\Promo\ViewModel\Promo;

use Magento\Framework\Serialize\Serializer\Json;
use Magento\Framework\View\Element\Block\ArgumentInterface;

class PromoList implements ArgumentInterface
{
    private $json;

    public function __construct(Json $json)
    {
        $this->json = $json;
    }

    public function getPromotions(): array
    {
        return [
            'TODAY 30% off for t-shirts',
            'Tomorrow 20% off for hats',
            'BUY 3 things – 1 for free'
        ];
    }

    public function getPromotionsJson(): string
    {
        return $this->json->serialize($this->getPromotions());
    }
}
